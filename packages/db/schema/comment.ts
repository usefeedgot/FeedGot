import { pgTable, text, timestamp, boolean, integer, json, uuid } from 'drizzle-orm/pg-core'
import { post } from './post'
import { user } from './auth'

export const comment = pgTable('comment', {
  id: uuid('id').primaryKey().defaultRandom(),
  postId: uuid('post_id')
    .notNull()
    .references(() => post.id, { onDelete: 'cascade' }),
  
  // Parent comment for nested replies
  parentId: uuid('parent_id'),
  
  // Comment content
  content: text('content').notNull(),
  
  // Author info (can be anonymous)
  authorId: text('author_id')
    .references(() => user.id, { onDelete: 'set null' }),
  authorName: text('author_name'), // for anonymous comments
  authorEmail: text('author_email'), // for anonymous comments
  isAnonymous: boolean('is_anonymous').default(false),
  
  // Comment status
  status: text('status', { 
    enum: ['published', 'pending', 'spam', 'deleted', 'hidden'] 
  }).default('published'),
  
  // Engagement metrics
  upvotes: integer('upvotes').default(0),
  downvotes: integer('downvotes').default(0),
  replyCount: integer('reply_count').default(0),
  
  // Nested level (for performance)
  depth: integer('depth').default(0),
  
  // Moderation
  isPinned: boolean('is_pinned').default(false),
  isEdited: boolean('is_edited').default(false),
  
  // Timestamps
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  editedAt: timestamp('edited_at'),
  
  // Moderation info
  moderatedBy: text('moderated_by')
    .references(() => user.id),
  moderatedAt: timestamp('moderated_at'),
  moderationReason: text('moderation_reason'),
  
  // Additional metadata
  metadata: json('metadata').$type<{
    attachments?: { name: string; url: string; type: string }[];
    mentions?: string[]; // user IDs mentioned in comment
    editHistory?: { content: string; editedAt: string }[];
  }>(),
  
  // IP and user agent for spam detection
  ipAddress: text('ip_address'),
  userAgent: text('user_agent'),
})

// Comment reactions (beyond upvote/downvote)
export const commentReaction = pgTable('comment_reaction', {
  id: uuid('id').primaryKey().defaultRandom(),
  commentId: uuid('comment_id')
    .notNull()
    .references(() => comment.id, { onDelete: 'cascade' }),
  userId: text('user_id')
    .references(() => user.id, { onDelete: 'cascade' }),
  
  // Reaction type (emoji or predefined reactions)
  type: text('type', { 
    enum: ['like', 'love', 'laugh', 'angry', 'sad', 'confused'] 
  }).notNull(),
  
  // For anonymous reactions
  ipAddress: text('ip_address'),
  fingerprint: text('fingerprint'),
  
  createdAt: timestamp('created_at').notNull().defaultNow(),
})

// Comment mentions for notifications
export const commentMention = pgTable('comment_mention', {
  id: uuid('id').primaryKey().defaultRandom(),
  commentId: uuid('comment_id')
    .notNull()
    .references(() => comment.id, { onDelete: 'cascade' }),
  mentionedUserId: text('mentioned_user_id')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
  mentionedBy: text('mentioned_by')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
  
  isRead: boolean('is_read').default(false),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})

// Comment reports for moderation
export const commentReport = pgTable('comment_report', {
  id: uuid('id').primaryKey().defaultRandom(),
  commentId: uuid('comment_id')
    .notNull()
    .references(() => comment.id, { onDelete: 'cascade' }),
  reportedBy: text('reported_by')
    .references(() => user.id, { onDelete: 'set null' }),
  
  reason: text('reason', { 
    enum: ['spam', 'harassment', 'inappropriate', 'off_topic', 'other'] 
  }).notNull(),
  description: text('description'),
  
  status: text('status', { 
    enum: ['pending', 'reviewed', 'resolved', 'dismissed'] 
  }).default('pending'),
  
  reviewedBy: text('reviewed_by')
    .references(() => user.id),
  reviewedAt: timestamp('reviewed_at'),
  resolution: text('resolution'),
  
  createdAt: timestamp('created_at').notNull().defaultNow(),
})

export type Comment = typeof comment.$inferSelect
export type CommentReaction = typeof commentReaction.$inferSelect
export type CommentMention = typeof commentMention.$inferSelect
export type CommentReport = typeof commentReport.$inferSelect
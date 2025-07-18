import React, { useState } from 'react';
import svgPaths from "../imports/svg-wve0eyd68n";
import svgPathsPost from "../imports/svg-q7l07nvofw";
import imgDepth4Frame2 from "figma:asset/6227e47a4249ab20b85ee22ba444c9c4ab585f07.png";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Separator } from './ui/separator';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from './ui/dropdown-menu';
import { 
  Heart, MessageSquare, MoreHorizontal, Pin, Edit, Trash2, Eye, UserMinus, 
  Send, Reply, Play, Download, FileText, X
} from 'lucide-react';

interface Comment {
  id: string;
  author: string;
  authorAvatar: string;
  role: string;
  content: string;
  timestamp: string;
  likes: number;
  isLiked: boolean;
  replies: Comment[];
}

interface Post {
  id: string;
  type: 'text' | 'photo' | 'video' | 'document';
  author: string;
  authorAvatar: string;
  role: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: Comment[];
  isLiked: boolean;
  isPinned?: boolean;
  media?: {
    url: string;
    type: string;
    name?: string;
    thumbnail?: string;
  };
}

interface PostShowcaseProps {
  communitySettings: {
    primaryColor: string;
    secondaryColor: string;
  };
  currentUser: {
    name: string;
    avatar: string;
    role: string;
  };
}

export default function PostShowcase({ communitySettings, currentUser }: PostShowcaseProps) {
  const [expandedComments, setExpandedComments] = useState<{ [key: string]: boolean }>({});
  const [replyingTo, setReplyingTo] = useState<{ postId: string; commentId?: string } | null>(null);
  const [newComment, setNewComment] = useState('');
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 'showcase-1',
      type: 'text',
      author: 'Sarah Chen',
      authorAvatar: imgDepth4Frame2,
      role: 'admin',
      content: `🎯 **Pinned Welcome Post** - This showcases a pinned text post from an admin with high engagement. Notice the pin indicator and admin badge styling.`,
      timestamp: '2 days ago',
      likes: 45,
      comments: [
        {
          id: 'c1',
          author: 'Alex Rodriguez',
          authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
          role: 'member',
          content: 'Thanks for the warm welcome! Excited to be part of this community.',
          timestamp: '1 day ago',
          likes: 8,
          isLiked: false,
          replies: [
            {
              id: 'r1',
              author: 'Sarah Chen',
              authorAvatar: imgDepth4Frame2,
              role: 'admin',
              content: 'Welcome aboard! Feel free to introduce yourself in the general channel.',
              timestamp: '1 day ago',
              likes: 3,
              isLiked: false,
              replies: []
            }
          ]
        },
        {
          id: 'c2',
          author: 'Jamie Kim',
          authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
          role: 'member',
          content: 'Love the community vibe already! 🚀',
          timestamp: '1 day ago',
          likes: 12,
          isLiked: true,
          replies: []
        }
      ],
      isLiked: true,
      isPinned: true
    },
    {
      id: 'showcase-2',
      type: 'photo',
      author: 'Marcus Johnson',
      authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
      role: 'moderator',
      content: `📸 **Photo Post Example** - Sharing my latest workspace setup! This demonstrates how image posts are displayed with proper aspect ratios and responsive design. #workspace #productivity`,
      timestamp: '1 day ago',
      likes: 23,
      comments: [
        {
          id: 'c3',
          author: 'Elena Rodriguez',
          authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612ec00?w=40&h=40&fit=crop&crop=face',
          role: 'member',
          content: 'Clean setup! Love the minimalist approach. What monitor are you using?',
          timestamp: '12 hours ago',
          likes: 5,
          isLiked: false,
          replies: []
        }
      ],
      isLiked: false,
      media: {
        url: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&h=400&fit=crop',
        type: 'image'
      }
    },
    {
      id: 'showcase-3',
      type: 'video',
      author: 'David Park',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      role: 'member',
      content: `🎥 **Video Content Demo** - Quick tutorial on React hooks! This shows how video posts appear with thumbnails and play buttons. Great for educational content and demos.`,
      timestamp: '6 hours ago',
      likes: 67,
      comments: [
        {
          id: 'c4',
          author: 'Sarah Chen',
          authorAvatar: imgDepth4Frame2,
          role: 'admin',
          content: 'Excellent tutorial! Very clear explanations. Mind if we feature this in our newsletter?',
          timestamp: '4 hours ago',
          likes: 15,
          isLiked: true,
          replies: [
            {
              id: 'r2',
              author: 'David Park',
              authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
              role: 'member',
              content: 'Absolutely! Feel free to share it. Thanks for the feedback! 🙏',
              timestamp: '3 hours ago',
              likes: 8,
              isLiked: false,
              replies: []
            }
          ]
        },
        {
          id: 'c5',
          author: 'Lisa Wang',
          authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face',
          role: 'member',
          content: 'This helped me understand useEffect so much better. Thank you!',
          timestamp: '2 hours ago',
          likes: 22,
          isLiked: false,
          replies: []
        }
      ],
      isLiked: true,
      media: {
        url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        type: 'video',
        thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop'
      }
    },
    {
      id: 'showcase-4',
      type: 'document',
      author: 'Nina Patel',
      authorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=40&h=40&fit=crop&crop=face',
      role: 'member',
      content: `📄 **Document Sharing** - Here's the complete style guide we discussed in yesterday's meeting. This demonstrates how file attachments are displayed with download options and file type icons.`,
      timestamp: '3 hours ago',
      likes: 34,
      comments: [],
      isLiked: false,
      media: {
        url: '/documents/style-guide.pdf',
        type: 'document',
        name: 'design-system-style-guide-v2.pdf'
      }
    },
    {
      id: 'showcase-5',
      type: 'text',
      author: 'Mike Chen',
      authorAvatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=40&h=40&fit=crop&crop=face',
      role: 'member',
      content: `💭 **Text-Only Discussion** - What's everyone's favorite VS Code extension for React development? I'm always looking for new tools to improve my workflow. Share your recommendations below! This post demonstrates a simple text discussion that encourages community engagement.`,
      timestamp: '30 minutes ago',
      likes: 12,
      comments: [
        {
          id: 'c6',
          author: 'Tom Anderson',
          authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
          role: 'member',
          content: 'ES7+ React/Redux/React-Native snippets is a game changer!',
          timestamp: '15 minutes ago',
          likes: 6,
          isLiked: false,
          replies: []
        }
      ],
      isLiked: false
    },
    {
      id: 'showcase-6',
      type: 'text',
      author: 'Emma Wilson',
      authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face',
      role: 'member',
      content: `🎉 **High Engagement Post** - Just launched my first open-source project! It's a React component library with 50+ components. This post shows how popular content with many comments and likes appears in the feed.`,
      timestamp: '4 hours ago',
      likes: 89,
      comments: [
        {
          id: 'c7',
          author: 'John Smith',
          authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
          role: 'member',
          content: 'Congratulations! The components look amazing. Do you have TypeScript support?',
          timestamp: '3 hours ago',
          likes: 12,
          isLiked: false,
          replies: [
            {
              id: 'r3',
              author: 'Emma Wilson',
              authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face',
              role: 'member',
              content: 'Yes! Full TypeScript support with proper type definitions.',
              timestamp: '2 hours ago',
              likes: 8,
              isLiked: false,
              replies: []
            }
          ]
        },
        {
          id: 'c8',
          author: 'Sarah Chen',
          authorAvatar: imgDepth4Frame2,
          role: 'admin',
          content: 'This is fantastic! Would love to feature this in our community showcase. Keep up the great work! 🌟',
          timestamp: '2 hours ago',
          likes: 25,
          isLiked: true,
          replies: []
        },
        {
          id: 'c9',
          author: 'Alex Kim',
          authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
          role: 'member',
          content: 'Bookmarked for my next project! Thanks for sharing.',
          timestamp: '1 hour ago',
          likes: 7,
          isLiked: false,
          replies: []
        },
        {
          id: 'c10',
          author: 'Rachel Green',
          authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612ec00?w=40&h=40&fit=crop&crop=face',
          role: 'member',
          content: 'The documentation is so well written. Great job!',
          timestamp: '45 minutes ago',
          likes: 14,
          isLiked: false,
          replies: []
        }
      ],
      isLiked: true
    }
  ]);

  const handleLike = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  const handleCommentLike = (postId: string, commentId: string, isReply = false, parentCommentId?: string) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        const updatedComments = post.comments.map(comment => {
          if (isReply && comment.id === parentCommentId) {
            return {
              ...comment,
              replies: comment.replies.map(reply =>
                reply.id === commentId
                  ? { ...reply, isLiked: !reply.isLiked, likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1 }
                  : reply
              )
            };
          } else if (!isReply && comment.id === commentId) {
            return { ...comment, isLiked: !comment.isLiked, likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1 };
          }
          return comment;
        });
        return { ...post, comments: updatedComments };
      }
      return post;
    }));
  };

  const handleAddComment = (postId: string, commentId?: string) => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        author: currentUser.name,
        authorAvatar: currentUser.avatar,
        role: currentUser.role,
        content: newComment,
        timestamp: 'now',
        likes: 0,
        isLiked: false,
        replies: []
      };

      setPosts(posts.map(post => {
        if (post.id === postId) {
          if (commentId) {
            const updatedComments = post.comments.map(c =>
              c.id === commentId
                ? { ...c, replies: [...c.replies, comment] }
                : c
            );
            return { ...post, comments: updatedComments };
          } else {
            return { ...post, comments: [...post.comments, comment] };
          }
        }
        return post;
      }));

      setNewComment('');
      setReplyingTo(null);
    }
  };

  const handlePinPost = (postId: string) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, isPinned: !post.isPinned }
        : post
    ));
  };

  const handleDeletePost = (postId: string) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  const getCommentsCount = (comments: Comment[]): number => {
    return comments.reduce((count, comment) => count + 1 + comment.replies.length, 0);
  };

  const renderComment = (comment: Comment, postId: string, isReply = false, parentCommentId?: string) => (
    <div key={comment.id} className={`${isReply ? 'ml-8 mt-2' : 'mt-4'}`}>
      <div className="flex items-start gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src={comment.authorAvatar} />
          <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-medium text-sm">{comment.author}</span>
              <Badge
                variant="secondary"
                className="text-xs"
                style={{
                  backgroundColor: comment.role === 'admin' ? `${communitySettings.primaryColor}20` : '#f1f5f9',
                  color: comment.role === 'admin' ? communitySettings.primaryColor : '#64748b'
                }}
              >
                {comment.role}
              </Badge>
              <span className="text-xs text-gray-500">{comment.timestamp}</span>
            </div>
            <p className="text-sm text-gray-700">{comment.content}</p>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleCommentLike(postId, comment.id, isReply, parentCommentId)}
              className={`h-auto p-1 ${comment.isLiked ? 'text-red-500' : 'text-gray-500'}`}
            >
              <Heart className={`h-3 w-3 mr-1 ${comment.isLiked ? 'fill-current' : ''}`} />
              {comment.likes}
            </Button>
            {!isReply && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setReplyingTo({ postId, commentId: comment.id })}
                className="h-auto p-1 text-gray-500"
              >
                <Reply className="h-3 w-3 mr-1" />
                Reply
              </Button>
            )}
          </div>
          {comment.replies.map(reply => renderComment(reply, postId, true, comment.id))}
        </div>
      </div>
    </div>
  );

  const renderPostMedia = (post: Post) => {
    if (!post.media) return null;

    switch (post.type) {
      case 'photo':
        return (
          <div className="mt-4 rounded-lg overflow-hidden">
            <ImageWithFallback
              src={post.media.url}
              alt="Post image"
              className="w-full max-h-96 object-cover"
            />
          </div>
        );
      
      case 'video':
        return (
          <div className="mt-4 relative rounded-lg overflow-hidden bg-black">
            <div className="relative aspect-video">
              <ImageWithFallback
                src={post.media.thumbnail || 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop'}
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="lg" className="rounded-full bg-black/50 hover:bg-black/70">
                  <Play className="h-6 w-6 ml-1" fill="white" />
                </Button>
              </div>
            </div>
          </div>
        );
      
      case 'document':
        return (
          <div className="mt-4 p-4 border border-gray-200 rounded-lg bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{post.media.name}</p>
                <p className="text-sm text-gray-500">PDF Document</p>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  const isCurrentUserPost = (post: Post) => post.author === currentUser.name;

  return (
    <div className="space-y-8">
      {/* Showcase Header */}
      <div className="text-center space-y-4 py-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900">Post Types & Interactions Showcase</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore different types of posts, interaction patterns, and engagement scenarios in our community platform.
          Each example demonstrates various features including post types, commenting, reactions, and moderation tools.
        </p>
      </div>

      {/* Posts Showcase */}
      <div className="space-y-6">
        {posts.map((post) => (
          <Card key={post.id} className="backdrop-blur-sm bg-white/90 shadow-md">
            <CardContent className="p-6">
              {/* Pinned indicator */}
              {post.isPinned && (
                <div className="flex items-center gap-2 mb-4 text-sm text-blue-600 bg-blue-50 p-2 rounded">
                  <Pin className="h-4 w-4" />
                  <span>Pinned post - This demonstrates how important announcements are highlighted</span>
                </div>
              )}

              {/* Post Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={post.authorAvatar} />
                    <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-900">{post.author}</h3>
                      <Badge
                        variant="secondary"
                        className="text-xs"
                        style={{ 
                          backgroundColor: post.role === 'admin' ? `${communitySettings.primaryColor}20` : post.role === 'moderator' ? '#fbbf2420' : '#f1f5f9',
                          color: post.role === 'admin' ? communitySettings.primaryColor : post.role === 'moderator' ? '#f59e0b' : '#64748b'
                        }}
                      >
                        {post.role}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500">{post.timestamp}</p>
                  </div>
                </div>
                
                {/* Post Actions Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-10 w-10">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem onClick={() => handlePinPost(post.id)}>
                      <Pin className="h-4 w-4 mr-2" />
                      {post.isPinned ? 'Unpin post' : 'Pin post'}
                    </DropdownMenuItem>
                    
                    {isCurrentUserPost(post) ? (
                      <>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit post
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => handleDeletePost(post.id)}
                          className="text-red-600"
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete post
                        </DropdownMenuItem>
                      </>
                    ) : (
                      <>
                        <DropdownMenuItem 
                          onClick={() => handleDeletePost(post.id)}
                          className="text-red-600"
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete post
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          View profile
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          className="text-red-600"
                        >
                          <UserMinus className="h-4 w-4 mr-2" />
                          Delete member
                        </DropdownMenuItem>
                      </>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Post Content */}
              <div className="mb-4">
                <p className="text-gray-700 whitespace-pre-wrap">{post.content}</p>
                {renderPostMedia(post)}
              </div>

              {/* Post Actions */}
              <Separator className="mb-4" />
              <div className="flex items-center gap-6 mb-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleLike(post.id)}
                  className={post.isLiked ? 'text-red-500' : 'text-gray-600'}
                >
                  <Heart className={`h-4 w-4 mr-2 ${post.isLiked ? 'fill-current' : ''}`} />
                  {post.likes}
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-600"
                  onClick={() => setExpandedComments(prev => ({ ...prev, [post.id]: !prev[post.id] }))}
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  {getCommentsCount(post.comments)}
                </Button>
              </div>

              {/* Comments Section */}
              {post.comments.length > 0 && (
                <div className="border-t pt-4">
                  {/* Show preview of first comment */}
                  {!expandedComments[post.id] && post.comments.length > 0 && (
                    <div>
                      {renderComment(post.comments[0], post.id)}
                      {post.comments.length > 1 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setExpandedComments(prev => ({ ...prev, [post.id]: true }))}
                          className="mt-2 text-blue-600"
                        >
                          View {post.comments.length - 1} more {post.comments.length - 1 === 1 ? 'comment' : 'comments'} →
                        </Button>
                      )}
                    </div>
                  )}

                  {/* Show all comments when expanded */}
                  {expandedComments[post.id] && (
                    <div>
                      {post.comments.map(comment => renderComment(comment, post.id))}
                      {post.comments.length > 1 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setExpandedComments(prev => ({ ...prev, [post.id]: false }))}
                          className="mt-2 text-gray-600"
                        >
                          Show less ↑
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Add Comment/Reply Input */}
              {(replyingTo?.postId === post.id || post.comments.length === 0 || expandedComments[post.id]) && (
                <div className="mt-4 border-t pt-4">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={currentUser.avatar} />
                      <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Input
                        placeholder={replyingTo?.commentId ? "Write a reply..." : "Write a comment..."}
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            handleAddComment(post.id, replyingTo?.commentId);
                          }
                        }}
                        className="mb-2"
                      />
                      <div className="flex items-center justify-between">
                        {replyingTo?.postId === post.id && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setReplyingTo(null)}
                            className="text-gray-500"
                          >
                            Cancel
                          </Button>
                        )}
                        <div className="flex-1" />
                        <Button
                          size="sm"
                          onClick={() => handleAddComment(post.id, replyingTo?.commentId)}
                          disabled={!newComment.trim()}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          <Send className="h-3 w-3 mr-1" />
                          {replyingTo?.commentId ? 'Reply' : 'Comment'}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Feature Summary */}
      <div className="bg-gray-50 rounded-lg p-6 space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Showcased Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Post Types</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Text posts with rich content</li>
              <li>• Photo posts with image display</li>
              <li>• Video posts with thumbnails</li>
              <li>• Document posts with download options</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Interactions</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Like/unlike posts and comments</li>
              <li>• Nested comment replies</li>
              <li>• Expandable comment sections</li>
              <li>• Pin/unpin important posts</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-2">User Roles</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Admin badges and permissions</li>
              <li>• Moderator distinctive styling</li>
              <li>• Member standard appearance</li>
              <li>• Role-based action menus</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Moderation</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Edit/delete own posts</li>
              <li>• Admin delete any post</li>
              <li>• View member profiles</li>
              <li>• Remove community members</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
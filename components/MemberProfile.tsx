import React, { useState } from 'react';
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
  ArrowLeft, Crown, Shield, MessageCircle, Calendar, MapPin, Globe, Github, Twitter,
  Heart, MoreHorizontal, Pin, Edit, Trash2, Eye, UserMinus, Send, Reply, Play, Download, FileText
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

interface Member {
  id: string;
  name: string;
  username: string;
  avatar: string;
  role: 'admin' | 'moderator' | 'member';
  bio?: string;
  location?: string;
  joinDate: string;
  postsCount: number;
  commentsCount: number;
  isOnline: boolean;
  lastSeen: string;
  socialLinks?: {
    website?: string;
    github?: string;
    twitter?: string;
  };
}

interface MemberProfileProps {
  memberId: string;
  communitySettings: {
    primaryColor: string;
    secondaryColor: string;
  };
  currentUser: {
    name: string;
    avatar: string;
    role: string;
  };
  onBack: () => void;
}

export default function MemberProfile({ memberId, communitySettings, currentUser, onBack }: MemberProfileProps) {
  const [expandedComments, setExpandedComments] = useState<{ [key: string]: boolean }>({});
  const [replyingTo, setReplyingTo] = useState<{ postId: string; commentId?: string } | null>(null);
  const [newComment, setNewComment] = useState('');

  // Mock member data - in real app, fetch by memberId
  const member: Member = {
    id: memberId,
    name: 'Alex Rodriguez',
    username: 'alexdev',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    role: 'member',
    bio: 'Frontend developer specializing in React and TypeScript. Always learning something new! I love building user interfaces that are both beautiful and functional. Currently working on improving web accessibility and performance optimization.',
    location: 'Austin, TX',
    joinDate: '2024-02-03',
    postsCount: 12,
    commentsCount: 89,
    isOnline: false,
    lastSeen: '2 hours ago',
    socialLinks: {
      website: 'https://alexdev.com',
      github: 'https://github.com/alexdev',
      twitter: 'https://twitter.com/alexdev'
    }
  };

  const [posts, setPosts] = useState<Post[]>([
    {
      id: 'alex-1',
      type: 'photo',
      author: 'Alex Rodriguez',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      role: 'member',
      content: `Just finished setting up my new development workspace! The dual monitor setup is perfect for coding sessions. What does your workspace look like? Share photos of your setup! 💻✨ #workspace #productivity`,
      timestamp: '7/10/2025',
      likes: 31,
      comments: [
        {
          id: 'c1',
          author: 'Marcus Johnson',
          authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
          role: 'moderator',
          content: 'Nice setup! I love the minimalist approach. Clean workspace = clean code! 💻',
          timestamp: '1 hour ago',
          likes: 3,
          isLiked: false,
          replies: []
        },
        {
          id: 'c2',
          author: 'Jamie Kim',
          authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
          role: 'member',
          content: 'That monitor arm is exactly what I need! Where did you get it?',
          timestamp: '45 minutes ago',
          likes: 2,
          isLiked: false,
          replies: [
            {
              id: 'r1',
              author: 'Alex Rodriguez',
              authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
              role: 'member',
              content: 'Got it from Amazon! It\'s the VIVO dual monitor arm. Super sturdy and adjustable.',
              timestamp: '30 minutes ago',
              likes: 1,
              isLiked: false,
              replies: []
            }
          ]
        }
      ],
      isLiked: false,
      media: {
        url: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&h=400&fit=crop',
        type: 'image'
      }
    },
    {
      id: 'alex-2',
      type: 'text',
      author: 'Alex Rodriguez',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      role: 'member',
      content: `🚀 **React Performance Tips** I've been diving deep into React performance optimization lately. Here are some key takeaways: 1. **Use React.memo wisely** - Don't wrap everything, only components that re-render frequently 2. **Optimize expensive calculations** - useMemo for heavy computations, useCallback for function references 3. **Code splitting** - Lazy load components that aren't immediately needed 4. **Virtual scrolling** - For long lists, consider react-window or react-virtualized What are your go-to performance optimization techniques? 🤔`,
      timestamp: '7/8/2025',
      likes: 45,
      comments: [
        {
          id: 'c3',
          author: 'Sarah Chen',
          authorAvatar: imgDepth4Frame2,
          role: 'admin',
          content: 'Great tips! I\'d add that profiling with React DevTools is crucial for identifying actual bottlenecks rather than premature optimization.',
          timestamp: '2 days ago',
          likes: 12,
          isLiked: true,
          replies: []
        },
        {
          id: 'c4',
          author: 'David Park',
          authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
          role: 'member',
          content: 'Thanks for sharing! The useMemo tip is especially helpful. I was overusing it before.',
          timestamp: '1 day ago',
          likes: 8,
          isLiked: false,
          replies: []
        }
      ],
      isLiked: true
    },
    {
      id: 'alex-3',
      type: 'document',
      author: 'Alex Rodriguez',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      role: 'member',
      content: `📚 **TypeScript Cheat Sheet** I created this comprehensive TypeScript cheat sheet covering the most commonly used types, interfaces, and patterns. Perfect for quick reference during development! Covers: - Basic types and interfaces - Generic types - Utility types - Advanced patterns - Common pitfalls to avoid Feel free to download and share! 🎉`,
      timestamp: '7/6/2025',
      likes: 67,
      comments: [
        {
          id: 'c5',
          author: 'Lisa Wang',
          authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face',
          role: 'member',
          content: 'This is exactly what I needed! The utility types section is super helpful.',
          timestamp: '3 days ago',
          likes: 15,
          isLiked: false,
          replies: []
        }
      ],
      isLiked: true,
      media: {
        url: '/documents/typescript-cheat-sheet.pdf',
        type: 'document',
        name: 'typescript-cheat-sheet-2025.pdf'
      }
    },
    {
      id: 'alex-4',
      type: 'text',
      author: 'Alex Rodriguez',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      role: 'member',
      content: `💭 **Question for the community** I'm working on a complex form with nested objects and arrays. What's your preferred approach for form validation in React? Currently debating between: - React Hook Form + Yup - Formik + Yup - Custom validation hooks - Zod for schema validation Any recommendations or experiences to share? Looking for something that handles nested validation well and has good TypeScript support. 🤓`,
      timestamp: '7/4/2025',
      likes: 23,
      comments: [
        {
          id: 'c6',
          author: 'Marcus Johnson',
          authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
          role: 'moderator',
          content: 'React Hook Form + Zod is my go-to combo. Great performance and excellent TypeScript integration.',
          timestamp: '5 days ago',
          likes: 18,
          isLiked: false,
          replies: [
            {
              id: 'r2',
              author: 'Alex Rodriguez',
              authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
              role: 'member',
              content: 'Thanks! I\'ll give Zod a try. I\'ve heard great things about its TypeScript support.',
              timestamp: '5 days ago',
              likes: 5,
              isLiked: false,
              replies: []
            }
          ]
        }
      ],
      isLiked: false
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
  const canDeleteMember = currentUser.role === 'admin' && member.role !== 'admin';

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'admin':
        return <Crown className="h-4 w-4 mr-1" />;
      case 'moderator':
        return <Shield className="h-4 w-4 mr-1" />;
      default:
        return null;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin':
        return { backgroundColor: `${communitySettings.primaryColor}20`, color: communitySettings.primaryColor };
      case 'moderator':
        return { backgroundColor: '#fbbf2420', color: '#f59e0b' };
      default:
        return { backgroundColor: '#f1f5f9', color: '#64748b' };
    }
  };

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Button variant="ghost" onClick={onBack} className="mb-4">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Members
      </Button>

      {/* Member Profile Header */}
      <Card>
        <CardContent className="p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Avatar and Basic Info */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="relative mb-4">
                <Avatar className="h-32 w-32">
                  <AvatarImage src={member.avatar} />
                  <AvatarFallback className="text-2xl">{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                {member.isOnline && (
                  <div className="absolute -bottom-2 -right-2 h-6 w-6 bg-green-500 border-4 border-white rounded-full" />
                )}
              </div>
              
              <h1 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h1>
              <p className="text-gray-500 mb-2">@{member.username}</p>
              
              <Badge
                variant="secondary"
                className="mb-4"
                style={getRoleColor(member.role)}
              >
                {getRoleIcon(member.role)}
                {member.role}
              </Badge>

              {/* Social Links */}
              {member.socialLinks && (
                <div className="flex gap-2">
                  {member.socialLinks.website && (
                    <Button variant="outline" size="icon">
                      <Globe className="h-4 w-4" />
                    </Button>
                  )}
                  {member.socialLinks.github && (
                    <Button variant="outline" size="icon">
                      <Github className="h-4 w-4" />
                    </Button>
                  )}
                  {member.socialLinks.twitter && (
                    <Button variant="outline" size="icon">
                      <Twitter className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              )}
            </div>

            {/* Details and Stats */}
            <div className="flex-1">
              {/* Bio */}
              {member.bio && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">About</h3>
                  <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                </div>
              )}

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900">{member.postsCount}</div>
                  <div className="text-sm text-gray-500">Posts</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900">{member.commentsCount}</div>
                  <div className="text-sm text-gray-500">Comments</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900">{posts.reduce((sum, post) => sum + post.likes, 0)}</div>
                  <div className="text-sm text-gray-500">Likes Received</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900">{Math.round((Date.now() - new Date(member.joinDate).getTime()) / (1000 * 60 * 60 * 24))}</div>
                  <div className="text-sm text-gray-500">Days Active</div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                {member.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {member.location}
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Joined {new Date(member.joinDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
                <div className="flex items-center gap-2">
                  <div className={`h-3 w-3 rounded-full ${member.isOnline ? 'bg-green-500' : 'bg-gray-400'}`} />
                  {member.isOnline ? 'Online now' : `Last seen ${member.lastSeen}`}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-6">
                <Button>
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
                {canDeleteMember && (
                  <Button variant="outline" className="text-red-600 hover:text-red-700">
                    <UserMinus className="h-4 w-4 mr-2" />
                    Remove Member
                  </Button>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Posts Section */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Posts by {member.name} ({posts.length})
        </h2>
        
        <div className="space-y-6">
          {posts.map((post) => (
            <Card key={post.id} className="backdrop-blur-sm bg-white/90 shadow-md">
              <CardContent className="p-6">
                {/* Pinned indicator */}
                {post.isPinned && (
                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                    <Pin className="h-4 w-4" />
                    <span>Pinned post</span>
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
                          style={getRoleColor(post.role)}
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
                      {currentUser.role === 'admin' && (
                        <DropdownMenuItem onClick={() => handlePinPost(post.id)}>
                          <Pin className="h-4 w-4 mr-2" />
                          {post.isPinned ? 'Unpin post' : 'Pin post'}
                        </DropdownMenuItem>
                      )}
                      
                      {(isCurrentUserPost(post) || currentUser.role === 'admin') ? (
                        <>
                          {isCurrentUserPost(post) && (
                            <DropdownMenuItem>
                              <Edit className="h-4 w-4 mr-2" />
                              Edit post
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuItem 
                            onClick={() => handleDeletePost(post.id)}
                            className="text-red-600"
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete post
                          </DropdownMenuItem>
                        </>
                      ) : (
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          View details
                        </DropdownMenuItem>
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
                    <MessageCircle className="h-4 w-4 mr-2" />
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
                            className="mt-2 text-gray-600"
                          >
                            View {post.comments.length - 1} more {post.comments.length - 1 === 1 ? 'comment' : 'comments'}
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
                            Show less
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

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No posts yet</h3>
            <p className="text-gray-500">{member.name} hasn't shared any posts in the community yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
import React, { useState, useRef } from 'react';
import svgPaths from "./imports/svg-wve0eyd68n";
import svgPathsPost from "./imports/svg-q7l07nvofw";
import imgImage1 from "figma:asset/eb19581f98142c2be49ac44e7c54dd138ba63362.png";
import imgDepth4Frame2 from "figma:asset/6227e47a4249ab20b85ee22ba444c9c4ab585f07.png";
import exampleImage from 'figma:asset/e8463f8771f96d936b0c195303469bc3755b5732.png';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Badge } from './components/ui/badge';
import { Card, CardContent, CardHeader } from './components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from './components/ui/avatar';
import { Separator } from './components/ui/separator';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from './components/ui/dropdown-menu';
import PostShowcase from './components/PostShowcase';
import PostingFlowShowcase from './components/PostingFlowShowcase';
import Members from './components/Members';
import MemberProfile from './components/MemberProfile';
import MemberProfileModal from './components/MemberProfileModal';
import PrivateCommunityLockPage from './components/PrivateCommunityLockPage';
import PendingMembersPanel from './components/PendingMembersPanel';
import { 
  Search, MessageCircle, Users, Settings, Plus, Heart, MessageSquare, 
  MoreHorizontal, ChevronDown, BookOpen, Settings as SettingsIcon, Star, 
  Edit, Palette, Image as ImageIcon, Video, FileText, Play, Download,
  X, Pin, Trash2, Eye, UserMinus, Send, Reply, Layout, Workflow, Bell, Filter
} from 'lucide-react';

interface CommunitySettings {
  name: string;
  description: string;
  heroImage: string;
  primaryColor: string;
  secondaryColor: string;
  logo: string;
  isPrivate: boolean;
}

type PostType = 'text' | 'photo' | 'video' | 'document';

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
  type: PostType;
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

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState('discussions');
  const [currentView, setCurrentView] = useState<'community' | 'showcase' | 'posting-flow' | 'members' | 'member-profile'>('community');
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);
  const [showMemberModal, setShowMemberModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set to false to show lock page
  const [showPendingRequests, setShowPendingRequests] = useState(false);
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [showPostCreator, setShowPostCreator] = useState(false);
  const [selectedPostType, setSelectedPostType] = useState<PostType>('text');
  const [expandedComments, setExpandedComments] = useState<{ [key: string]: boolean }>({});
  const [replyingTo, setReplyingTo] = useState<{ postId: string; commentId?: string } | null>(null);
  const [newComment, setNewComment] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [communitySettings, setCommunitySettings] = useState<CommunitySettings>({
    name: 'Tech Innovators Hub',
    description: 'A vibrant community of technology enthusiasts, developers, and innovators shaping the future.',
    heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=300&fit=crop',
    primaryColor: '#7444ef',
    secondaryColor: '#ec4899',
    logo: imgImage1,
    isPrivate: false
  });

  const [newPost, setNewPost] = useState({
    content: '',
    media: null as any
  });

  const currentUser = {
    name: 'Sarah Chen',
    avatar: imgDepth4Frame2,
    role: 'admin'
  };

  const sampleComments: Comment[] = [
    {
      id: 'c1',
      author: 'Alex Rodriguez',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      role: 'member',
      content: 'This is exactly what our community needed! Thank you for setting this up.',
      timestamp: '2 hours ago',
      likes: 5,
      isLiked: false,
      replies: [
        {
          id: 'r1',
          author: 'Sarah Chen',
          authorAvatar: imgDepth4Frame2,
          role: 'admin',
          content: 'Glad you find it helpful! Feel free to reach out if you have any questions.',
          timestamp: '1 hour ago',
          likes: 2,
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
      content: 'Looking forward to collaborating with everyone here! 🚀',
      timestamp: '3 hours ago',
      likes: 8,
      isLiked: true,
      replies: []
    }
  ];

  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      type: 'text',
      author: 'Sarah Chen',
      authorAvatar: imgDepth4Frame2,
      role: 'admin',
      content: `Welcome to Tech Innovators Hub! 🚀 We're thrilled to have you join our vibrant community of technology enthusiasts, developers, and innovators. This is your space to: ✨ Share your latest projects and ideas 💡 Collaborate with like-minded individuals 🌟 Stay updated with cutting-edge tech trends 🤝 Get support and feedback from the community 📚 Learn from experienced developers and innovators Don't forget to introduce yourself in the #general channel and let us know what brings you here. We can't wait to see what amazing things we'll build together! Happy coding! 💻`,
      timestamp: '7/11/2025',
      likes: 24,
      comments: sampleComments,
      isLiked: false,
      isPinned: true
    },
    {
      id: '2',
      type: 'text',
      author: 'Sarah Chen',
      authorAvatar: imgDepth4Frame2,
      role: 'admin',
      content: `Community Guidelines 📋 1. **Be Respectful** 🤝 Treat all members with kindness and respect. No harassment, discrimination, or offensive language. 2. **Stay On Topic** 🎯 Keep discussions relevant to technology, development, and innovation. 3. **No Spam** 🚫 Avoid excessive self-promotion, repeated posts, or irrelevant content. 4. **Share Knowledge** 📚 Help others learn and grow. Share resources, answer questions, and collaborate. 5. **Use Appropriate Channels** 📂 Post in the right channels to keep discussions organized. 6. **Respect Privacy** 🔒 Don't share personal information of others without consent. 7. **Report Issues** 🚨 If you see something that violates these guidelines, please report it to moderators. Remember: This community thrives on mutual respect and shared passion for technology! 🌟`,
      timestamp: '7/11/2025',
      likes: 18,
      comments: [],
      isLiked: true
    },
    {
      id: '3',
      type: 'photo',
      author: 'Alex Rodriguez',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      role: 'member',
      content: `Just finished setting up my new development workspace! The dual monitor setup is perfect for coding sessions. What does your workspace look like? Share photos of your setup! 💻✨ #workspace #productivity`,
      timestamp: '7/10/2025',
      likes: 31,
      comments: [
        {
          id: 'c3',
          author: 'Marcus Johnson',
          authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
          role: 'moderator',
          content: 'Nice setup! I love the minimalist approach. Clean workspace = clean code! 💻',
          timestamp: '1 hour ago',
          likes: 3,
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
      id: '4',
      type: 'video',
      author: 'Jamie Kim',
      authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      role: 'member',
      content: `Quick demo of the new React component library I've been working on. Features include drag-and-drop functionality, dark mode support, and full TypeScript integration. Would love to get your feedback! 🎥`,
      timestamp: '7/10/2025',
      likes: 42,
      comments: [
        {
          id: 'c4',
          author: 'Sarah Chen',
          authorAvatar: imgDepth4Frame2,
          role: 'admin',
          content: 'This looks incredible! The drag-and-drop functionality is so smooth. Have you considered open-sourcing this?',
          timestamp: '30 minutes ago',
          likes: 7,
          isLiked: true,
          replies: [
            {
              id: 'r2',
              author: 'Jamie Kim',
              authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
              role: 'member',
              content: 'Yes! Planning to open-source it next week. Will share the GitHub link here! 🎉',
              timestamp: '15 minutes ago',
              likes: 4,
              isLiked: false,
              replies: []
            }
          ]
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
      id: '5',
      type: 'document',
      author: 'Marcus Johnson',
      authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
      role: 'moderator',
      content: `Sharing the complete React TypeScript starter template that includes best practices, testing setup, and deployment configurations. This has been a community effort - thanks to everyone who contributed! 📄`,
      timestamp: '7/9/2025',
      likes: 67,
      comments: [],
      isLiked: false,
      media: {
        url: '/documents/react-typescript-starter.pdf',
        type: 'document',
        name: 'react-typescript-starter-template.pdf'
      }
    }
  ]);

  const [members] = useState([
    { 
      id: '1', name: 'Sarah Chen', username: 'sarah.chen', avatar: imgDepth4Frame2, role: 'admin',
      bio: 'Community founder & full-stack developer.', location: 'San Francisco, CA',
      joinDate: '2024-01-15', postsCount: 24, commentsCount: 156, isOnline: true, lastSeen: 'now'
    },
    { 
      id: '2', name: 'Alex Rodriguez', username: 'alexdev', 
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face', 
      role: 'member', bio: 'Frontend developer specializing in React.', location: 'Austin, TX',
      joinDate: '2024-02-03', postsCount: 12, commentsCount: 89, isOnline: false, lastSeen: '2 hours ago'
    },
    { 
      id: '3', name: 'Jamie Kim', username: 'jamie.kim', 
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face', 
      role: 'member', bio: 'UI/UX Designer turned developer.', location: 'Seattle, WA',
      joinDate: '2024-02-10', postsCount: 8, commentsCount: 67, isOnline: true, lastSeen: 'now'
    },
    { 
      id: '4', name: 'Marcus Johnson', username: 'marcus_j', 
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face', 
      role: 'moderator', bio: 'Senior developer with 10+ years experience.', location: 'Chicago, IL',
      joinDate: '2024-01-22', postsCount: 18, commentsCount: 203, isOnline: false, lastSeen: '1 hour ago'
    }
  ]);

  const sidebarItems = [
    { id: 'discussions', label: 'All discussions', icon: MessageCircle },
    { id: 'showcase', label: 'Post Showcase', icon: Layout },
    { id: 'posting-flow', label: 'Posting Flow', icon: Workflow },
    { id: 'course1', label: 'Course 1', icon: BookOpen },
    { id: 'course2', label: 'Course 2', icon: BookOpen },
    { id: 'course3', label: 'Course 3', icon: BookOpen },
  ];

  const postTypes = [
    { id: 'text', label: 'Text', icon: MessageSquare, description: 'Share thoughts and ideas' },
    { id: 'photo', label: 'Photo', icon: ImageIcon, description: 'Share images and screenshots' },
    { id: 'video', label: 'Video', icon: Video, description: 'Upload video content' },
    { id: 'document', label: 'Document', icon: FileText, description: 'Share files and documents' }
  ];

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
            // Adding a reply
            const updatedComments = post.comments.map(c =>
              c.id === commentId
                ? { ...c, replies: [...c.replies, comment] }
                : c
            );
            return { ...post, comments: updatedComments };
          } else {
            // Adding a new comment
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

  const handleDeleteMember = (memberName: string) => {
    // In a real app, this would remove the member from the community
    console.log('Delete member:', memberName);
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

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const mediaUrl = URL.createObjectURL(file);
      let mediaType = 'document';
      
      if (file.type.startsWith('image/')) {
        mediaType = 'image';
        setSelectedPostType('photo');
      } else if (file.type.startsWith('video/')) {
        mediaType = 'video';
        setSelectedPostType('video');
      } else {
        setSelectedPostType('document');
      }

      setNewPost({
        ...newPost,
        media: {
          url: mediaUrl,
          type: mediaType,
          name: file.name
        }
      });
    }
  };

  const handleCreatePost = () => {
    if (newPost.content.trim() || newPost.media) {
      const post: Post = {
        id: Date.now().toString(),
        type: selectedPostType,
        author: currentUser.name,
        authorAvatar: currentUser.avatar,
        role: currentUser.role,
        content: newPost.content,
        timestamp: new Date().toLocaleDateString(),
        likes: 0,
        comments: [],
        isLiked: false,
        media: newPost.media
      };
      setPosts([post, ...posts]);
      setNewPost({ content: '', media: null });
      setShowPostCreator(false);
      setSelectedPostType('text');
    }
  };

  const updateCommunitySettings = (newSettings: Partial<CommunitySettings>) => {
    setCommunitySettings(prev => ({ ...prev, ...newSettings }));
  };

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
        const youtubeId = extractYouTubeId(post.media.url);
        if (youtubeId) {
          return (
            <div className="mt-4 relative rounded-lg overflow-hidden bg-black aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          );
        } else {
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
        }
      
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

  const extractYouTubeId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Handle tab navigation
  const handleTabSelect = (tabId: string) => {
    setSelectedTab(tabId);
    if (tabId === 'showcase') {
      setCurrentView('showcase');
    } else if (tabId === 'posting-flow') {
      setCurrentView('posting-flow');
    } else {
      setCurrentView('community');
    }
  };

  // Handle member navigation
  const handleViewMembers = () => {
    setCurrentView('members');
    setSelectedTab('members');
  };

  const handleViewProfile = (memberId: string) => {
    setSelectedMemberId(memberId);
    setShowMemberModal(true);
  };

  const handleViewAllPosts = (memberId: string) => {
    setSelectedMemberId(memberId);
    setShowMemberModal(false);
    setCurrentView('member-profile');
  };

  const handleCloseMemberModal = () => {
    setShowMemberModal(false);
    setSelectedMemberId(null);
  };

  const handleBackToMembers = () => {
    setCurrentView('members');
    setSelectedMemberId(null);
  };

  const handleBackToCommunity = () => {
    setCurrentView('community');
    setSelectedTab('discussions');
  };

  // Handle community access
  const handleJoinRequest = (request: {
    email: string;
    password: string;
    message: string;
    name: string;
  }) => {
    console.log('Join request submitted:', request);
    // In a real app, this would submit the request to the backend
    alert('Your request has been submitted! You will be notified when it\'s reviewed.');
  };

  const handleLogin = (credentials: { email: string; password: string }) => {
    console.log('Login attempt:', credentials);
    // In a real app, this would authenticate the user
    setIsLoggedIn(true);
  };

  const handleTogglePrivacy = () => {
    setCommunitySettings(prev => ({ ...prev, isPrivate: !prev.isPrivate }));
  };

  // Show lock page if community is private and user is not logged in
  if (communitySettings.isPrivate && !isLoggedIn) {
    return (
      <PrivateCommunityLockPage
        communitySettings={communitySettings}
        onRequestSubmit={handleJoinRequest}
        onLogin={handleLogin}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modern Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Community Name */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden">
                <ImageWithFallback
                  src={communitySettings.logo}
                  alt="Community Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">{communitySettings.name}</h1>
                <div className="flex items-center gap-2">
                  <Badge 
                    className="text-xs px-2 py-0.5 text-white"
                    style={{ backgroundColor: communitySettings.primaryColor }}
                  >
                    Admin
                  </Badge>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    <span className="text-xs text-gray-500">183 members</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <Input
                  placeholder="Search discussions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 bg-gray-50 border-0 focus:ring-1 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src={imgDepth4Frame2} />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto flex gap-6 p-6">
        {/* Left Sidebar */}
        <aside className="w-64 shrink-0">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Navigation</h3>
              <nav className="space-y-1">
                {sidebarItems.map((item) => (
                  <Button
                    key={item.id}
                    variant={selectedTab === item.id ? "secondary" : "ghost"}
                    className="w-full justify-start text-sm"
                    onClick={() => handleTabSelect(item.id)}
                  >
                    <item.icon className="h-4 w-4 mr-3" />
                    {item.label}
                  </Button>
                ))}
              </nav>
            </div>

            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <Button
                  onClick={() => setShowCustomizer(true)}
                  variant="outline"
                  size="sm"
                  className="w-full justify-start text-sm"
                >
                  <Palette className="h-4 w-4 mr-3" />
                  Customize
                </Button>
                <Button
                  onClick={() => {
                    setCommunitySettings(prev => ({ ...prev, isPrivate: true }));
                    setIsLoggedIn(false);
                  }}
                  variant="outline"
                  size="sm"
                  className="w-full justify-start text-sm text-orange-600 hover:text-orange-700 border-orange-200"
                >
                  <Eye className="h-4 w-4 mr-3" />
                  Test Private Mode
                </Button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {currentView === 'showcase' ? (
            <PostShowcase 
              communitySettings={communitySettings}
              currentUser={currentUser}
            />
          ) : currentView === 'posting-flow' ? (
            <PostingFlowShowcase />
          ) : currentView === 'members' ? (
            <Members 
              communitySettings={communitySettings}
              currentUser={currentUser}
              onViewProfile={handleViewProfile}
            />
          ) : currentView === 'member-profile' && selectedMemberId ? (
            <MemberProfile 
              memberId={selectedMemberId}
              communitySettings={communitySettings}
              currentUser={currentUser}
              onBack={handleBackToMembers}
            />
          ) : (
            <div className="space-y-6">
              {/* Content Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Discussions</h2>
                  <p className="text-sm text-gray-600 mt-1">Connect, share, and collaborate with the community</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Latest
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>

              {/* Post Creator */}
              <Card className="shadow-sm border-gray-100">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={imgDepth4Frame2} />
                        <AvatarFallback>SC</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">What's on your mind?</h4>
                        <p className="text-sm text-gray-500">Share with the community</p>
                      </div>
                    </div>

                    {/* Input Area */}
                    <div 
                      className="bg-gray-50 rounded-xl p-4 cursor-text border-2 border-transparent hover:border-blue-100 transition-colors"
                      onClick={() => setShowPostCreator(true)}
                    >
                      <p className="text-gray-500">Share insights, ask questions, or start a discussion...</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setSelectedPostType('photo');
                            fileInputRef.current?.click();
                          }}
                          className="rounded-lg"
                        >
                          <ImageIcon className="h-4 w-4 mr-2" />
                          Photo
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setSelectedPostType('video');
                            setShowPostCreator(true);
                          }}
                          className="rounded-lg"
                        >
                          <Video className="h-4 w-4 mr-2" />
                          Video
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setSelectedPostType('document');
                            fileInputRef.current?.click();
                          }}
                          className="rounded-lg"
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          Document
                        </Button>
                      </div>
                      <Button
                        onClick={() => setShowPostCreator(true)}
                        className="bg-blue-600 hover:bg-blue-700 rounded-lg"
                      >
                        Post
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Posts Feed */}
              <div className="space-y-4">
                {posts.map((post) => (
                  <Card key={post.id} className="shadow-sm border-gray-100 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      {/* Pinned indicator */}
                      {post.isPinned && (
                        <div className="flex items-center gap-2 mb-4 px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-lg text-amber-700">
                          <Pin className="h-4 w-4" />
                          <span className="text-sm font-medium">Pinned post</span>
                        </div>
                      )}

                      {/* Post Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={post.authorAvatar} />
                            <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium text-gray-900">{post.author}</h4>
                              <Badge
                                variant="secondary"
                                className="text-xs px-2 py-0.5"
                                style={{ 
                                  backgroundColor: post.role === 'admin' ? `${communitySettings.primaryColor}20` : '#f8fafc',
                                  color: post.role === 'admin' ? communitySettings.primaryColor : '#64748b'
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
                            <Button variant="ghost" size="icon" className="h-8 w-8">
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
                                <DropdownMenuItem onClick={() => handleViewProfile(post.author.toLowerCase().replace(' ', '.').replace(/[^a-z.]/g, ''))}>
                                  <Eye className="h-4 w-4 mr-2" />
                                  View profile
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  onClick={() => handleDeleteMember(post.author)}
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
                        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{post.content}</p>
                        {renderPostMedia(post)}
                      </div>

                      {/* Post Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-6">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleLike(post.id)}
                            className={`h-8 ${post.isLiked ? 'text-red-500' : 'text-gray-600'} hover:text-red-500`}
                          >
                            <Heart className={`h-4 w-4 mr-2 ${post.isLiked ? 'fill-current' : ''}`} />
                            {post.likes}
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-8 text-gray-600 hover:text-blue-600"
                            onClick={() => setExpandedComments(prev => ({ ...prev, [post.id]: !prev[post.id] }))}
                          >
                            <MessageSquare className="h-4 w-4 mr-2" />
                            {getCommentsCount(post.comments)}
                          </Button>
                        </div>
                      </div>

                      {/* Comments Section */}
                      {post.comments.length > 0 && (
                        <div className="border-t border-gray-100 mt-4 pt-4">
                          {/* Show preview of first comment */}
                          {!expandedComments[post.id] && post.comments.length > 0 && (
                            <div>
                              {renderComment(post.comments[0], post.id)}
                              {post.comments.length > 1 && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => setExpandedComments(prev => ({ ...prev, [post.id]: true }))}
                                  className="mt-3 text-blue-600 hover:text-blue-700"
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
                                  className="mt-3 text-gray-600"
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
                        <div className="mt-4 border-t border-gray-100 pt-4">
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
                                className="mb-2 bg-gray-50 border-0 focus:ring-1 focus:ring-blue-500"
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
            </div>
          )}
        </main>

        {/* Right Sidebar */}
        <aside className="w-80 shrink-0">
          <div className="space-y-6">
            {/* Admin Panel */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-2 mb-4">
                <SettingsIcon className="h-5 w-5 text-gray-600" />
                <h3 className="font-medium text-gray-900">Admin Panel</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors" onClick={handleViewMembers}>
                  <div className="text-xl font-semibold text-gray-900">183</div>
                  <div className="text-sm text-gray-600">Members</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-xl font-semibold text-gray-900">{posts.length}</div>
                  <div className="text-sm text-gray-600">Posts</div>
                </div>
              </div>
            </div>

            {/* Pending Requests / Community Settings */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <PendingMembersPanel
                communitySettings={communitySettings}
                currentUser={currentUser}
                isPrivate={communitySettings.isPrivate}
                onTogglePrivacy={handleTogglePrivacy}
              />
            </div>

            {/* Active Members */}
            {!communitySettings.isPrivate && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-5 w-5 text-gray-600" />
                  <h3 className="font-medium text-gray-900">Active Members</h3>
                </div>
                <div className="space-y-3">
                  {members.slice(0, 4).map((member, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                      onClick={() => handleViewProfile(member.username)}
                    >
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={member.avatar} />
                          <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        {member.isOnline && (
                          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm text-gray-900 truncate">{member.name}</p>
                        <p className="text-xs text-gray-500 truncate">@{member.username}</p>
                      </div>
                      {member.role === 'admin' && (
                        <Badge variant="secondary" className="text-xs px-2 py-0.5">
                          <Star className="h-3 w-3 mr-1" />
                          Admin
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Invite Members
                </Button>
              </div>
            )}
          </div>
        </aside>
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        accept="image/*,video/*,.pdf,.doc,.docx,.txt"
        onChange={handleFileUpload}
      />

      {/* Enhanced Post Creator Modal with YouTube Support */}
      {showPostCreator && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader className="flex flex-row items-center justify-between border-b">
              <div>
                <h3 className="text-lg font-semibold">Create Post</h3>
                <p className="text-sm text-gray-600">Share something with the community</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setShowPostCreator(false);
                  setNewPost({ content: '', media: null });
                  setSelectedPostType('text');
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              {/* Author */}
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={imgDepth4Frame2} />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium">Sarah Chen</h4>
                  <p className="text-sm text-gray-500">Admin</p>
                </div>
              </div>

              {/* Content Input */}
              <textarea
                placeholder="What's on your mind? Share insights, ask questions, or start a discussion..."
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                className="w-full min-h-[160px] p-4 border border-gray-200 bg-gray-50 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
              />

              {/* YouTube URL Input for Video Posts */}
              {selectedPostType === 'video' && !newPost.media && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium mb-2">YouTube Video URL</label>
                    <Input
                      placeholder="https://www.youtube.com/watch?v=..."
                      className="w-full"
                      onChange={(e) => {
                        const url = e.target.value;
                        const youtubeId = extractYouTubeId(url);
                        if (youtubeId) {
                          setNewPost({
                            ...newPost,
                            media: {
                              url: url,
                              type: 'video',
                              thumbnail: `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
                            }
                          });
                        }
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Media Preview */}
              {newPost.media && (
                <div className="relative rounded-xl overflow-hidden border border-gray-200">
                  {selectedPostType === 'photo' && (
                    <div className="relative">
                      <img src={newPost.media.url} alt="Preview" className="w-full max-h-64 object-cover" />
                      <Button
                        size="icon"
                        variant="secondary"
                        className="absolute top-2 right-2"
                        onClick={() => setNewPost({ ...newPost, media: null })}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                  {selectedPostType === 'video' && (
                    <div className="relative bg-black aspect-video">
                      {extractYouTubeId(newPost.media.url) ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${extractYouTubeId(newPost.media.url)}`}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      ) : (
                        <video src={newPost.media.url} className="w-full h-full object-cover" />
                      )}
                      <Button
                        size="icon"
                        variant="secondary"
                        className="absolute top-2 right-2"
                        onClick={() => setNewPost({ ...newPost, media: null })}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                  {selectedPostType === 'document' && (
                    <div className="p-4 bg-gray-50">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded">
                          <FileText className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{newPost.media.name}</p>
                          <p className="text-sm text-gray-500">Document</p>
                        </div>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => setNewPost({ ...newPost, media: null })}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Media Options */}
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedPostType('photo');
                      fileInputRef.current?.click();
                    }}
                    className="rounded-lg"
                  >
                    <ImageIcon className="h-4 w-4 mr-2" />
                    Photo
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedPostType('video');
                      fileInputRef.current?.click();
                    }}
                    className="rounded-lg"
                  >
                    <Video className="h-4 w-4 mr-2" />
                    Video
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedPostType('document');
                      fileInputRef.current?.click();
                    }}
                    className="rounded-lg"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Document
                  </Button>
                </div>
                <Button
                  onClick={handleCreatePost}
                  disabled={!newPost.content.trim() && !newPost.media}
                  className="bg-blue-600 hover:bg-blue-700 rounded-lg"
                >
                  Post
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Member Profile Modal */}
      {showMemberModal && selectedMemberId && (
        <MemberProfileModal
          member={members.find(m => m.id === selectedMemberId || m.username === selectedMemberId) || members[0]}
          communitySettings={communitySettings}
          currentUser={currentUser}
          onClose={handleCloseMemberModal}
          onViewAllPosts={handleViewAllPosts}
        />
      )}

      {/* Branding Customization Modal */}
      {showCustomizer && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md">
            <CardHeader className="flex flex-row items-center justify-between border-b">
              <div>
                <h3 className="text-lg font-semibold">Customize Community</h3>
                <p className="text-sm text-gray-600">Make your community unique with custom branding</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowCustomizer(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Community Name</label>
                <Input
                  value={communitySettings.name}
                  onChange={(e) => updateCommunitySettings({ name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <Input
                  value={communitySettings.description}
                  onChange={(e) => updateCommunitySettings({ description: e.target.value })}
                />
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Private Community</h4>
                  <p className="text-sm text-gray-600">Require admin approval for new members</p>
                </div>
                <Button
                  variant={communitySettings.isPrivate ? "default" : "outline"}
                  size="sm"
                  onClick={handleTogglePrivacy}
                >
                  {communitySettings.isPrivate ? 'Private' : 'Public'}
                </Button>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-2">Primary Color</label>
                  <Input
                    type="color"
                    value={communitySettings.primaryColor}
                    onChange={(e) => updateCommunitySettings({ primaryColor: e.target.value })}
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-2">Secondary Color</label>
                  <Input
                    type="color"
                    value={communitySettings.secondaryColor}
                    onChange={(e) => updateCommunitySettings({ secondaryColor: e.target.value })}
                  />
                </div>
              </div>
              <Button
                onClick={() => setShowCustomizer(false)}
                className="w-full rounded-lg"
                style={{ backgroundColor: communitySettings.primaryColor }}
              >
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
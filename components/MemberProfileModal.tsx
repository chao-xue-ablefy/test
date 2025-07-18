import React from 'react';
import imgDepth4Frame2 from "figma:asset/6227e47a4249ab20b85ee22ba444c9c4ab585f07.png";
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { 
  X, Crown, Shield, MessageCircle, Calendar, MapPin, UserMinus, Eye
} from 'lucide-react';

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
}

interface MemberProfileModalProps {
  member: Member;
  communitySettings: {
    primaryColor: string;
    secondaryColor: string;
  };
  currentUser: {
    name: string;
    avatar: string;
    role: string;
  };
  onClose: () => void;
  onViewAllPosts: (memberId: string) => void;
}

export default function MemberProfileModal({ 
  member, 
  communitySettings, 
  currentUser, 
  onClose, 
  onViewAllPosts 
}: MemberProfileModalProps) {
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

  const canDeleteMember = currentUser.role === 'admin' && member.role !== 'admin';
  const totalLikes = Math.floor(member.postsCount * 2.3 + member.commentsCount * 0.8); // Mock calculation

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Member Profile</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Profile Content */}
        <div className="p-6 space-y-6">
          {/* Avatar and Basic Info */}
          <div className="text-center">
            <div className="relative inline-block mb-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src={member.avatar} />
                <AvatarFallback className="text-xl">{member.name.charAt(0)}</AvatarFallback>
              </Avatar>
              {member.isOnline && (
                <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-green-500 border-2 border-white rounded-full" />
              )}
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
            <p className="text-gray-500 mb-2">@{member.username}</p>
            
            <Badge
              variant="secondary"
              className="mb-4"
              style={getRoleColor(member.role)}
            >
              {getRoleIcon(member.role)}
              {member.role}
            </Badge>
          </div>

          {/* Bio */}
          {member.bio && (
            <div>
              <h4 className="font-medium text-gray-900 mb-2">About</h4>
              <p className="text-gray-700 text-sm leading-relaxed">{member.bio}</p>
            </div>
          )}

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-lg font-bold text-gray-900">{member.postsCount}</div>
              <div className="text-xs text-gray-500">Posts</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-lg font-bold text-gray-900">{member.commentsCount}</div>
              <div className="text-xs text-gray-500">Comments</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-lg font-bold text-gray-900">{totalLikes}</div>
              <div className="text-xs text-gray-500">Likes</div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-3 text-sm text-gray-600">
            {member.location && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {member.location}
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Joined {new Date(member.joinDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </div>
            <div className="flex items-center gap-2">
              <div className={`h-3 w-3 rounded-full ${member.isOnline ? 'bg-green-500' : 'bg-gray-400'}`} />
              {member.isOnline ? 'Online now' : `Last seen ${member.lastSeen}`}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button 
              className="w-full" 
              onClick={() => onViewAllPosts(member.id)}
            >
              <Eye className="h-4 w-4 mr-2" />
              View All Posts ({member.postsCount})
            </Button>
            
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1">
                <MessageCircle className="h-4 w-4 mr-2" />
                Message
              </Button>
              
              {canDeleteMember && (
                <Button variant="outline" className="text-red-600 hover:text-red-700">
                  <UserMinus className="h-4 w-4 mr-2" />
                  Remove
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
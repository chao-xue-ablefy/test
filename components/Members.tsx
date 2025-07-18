import React, { useState } from 'react';
import imgDepth4Frame2 from "figma:asset/6227e47a4249ab20b85ee22ba444c9c4ab585f07.png";
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { 
  Search, Users, Crown, Shield, MoreVertical, Eye, UserMinus, MessageCircle, 
  ChevronLeft, ChevronRight, Filter
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

interface MembersProps {
  communitySettings: {
    primaryColor: string;
    secondaryColor: string;
  };
  currentUser: {
    name: string;
    avatar: string;
    role: string;
  };
  onViewProfile: (memberId: string) => void;
}

export default function Members({ communitySettings, currentUser, onViewProfile }: MembersProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState<'all' | 'admin' | 'moderator' | 'member'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'joinDate' | 'posts' | 'activity'>('name');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  // Generate mock data for 183 members
  const generateMembers = (): Member[] => {
    const baseMembers = [
      {
        id: '1',
        name: 'Sarah Chen',
        username: 'sarah.chen',
        avatar: imgDepth4Frame2,
        role: 'admin' as const,
        bio: 'Community founder & full-stack developer.',
        location: 'San Francisco, CA',
        joinDate: '2024-01-15',
        postsCount: 24,
        commentsCount: 156,
        isOnline: true,
        lastSeen: 'now'
      },
      {
        id: '2',
        name: 'Alex Rodriguez',
        username: 'alexdev',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
        role: 'member' as const,
        bio: 'Frontend developer specializing in React and TypeScript.',
        location: 'Austin, TX',
        joinDate: '2024-02-03',
        postsCount: 12,
        commentsCount: 89,
        isOnline: false,
        lastSeen: '2 hours ago'
      },
      {
        id: '3',
        name: 'Marcus Johnson',
        username: 'marcus_j',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
        role: 'moderator' as const,
        bio: 'Senior developer with 10+ years experience.',
        location: 'Chicago, IL',
        joinDate: '2024-01-22',
        postsCount: 18,
        commentsCount: 203,
        isOnline: false,
        lastSeen: '1 hour ago'
      }
    ];

    const names = [
      'Emily Rodriguez', 'David Park', 'Lisa Wang', 'Tom Anderson', 'Nina Patel', 'Mike Chen',
      'Emma Wilson', 'John Smith', 'Rachel Green', 'Chris Brown', 'Anna Davis', 'Ryan Miller',
      'Sophie Taylor', 'Jake Wilson', 'Mia Garcia', 'Ben Moore', 'Zoe Clark', 'Luke Lewis',
      'Eva Turner', 'Max Hall', 'Lily Allen', 'Sam Young', 'Chloe King', 'Noah Wright',
      'Grace Lee', 'Owen Scott', 'Ava Adams', 'Ian Baker', 'Maya Hill', 'Leo Green',
    ];

    const locations = [
      'New York, NY', 'Los Angeles, CA', 'Seattle, WA', 'Boston, MA', 'Denver, CO',
      'Portland, OR', 'Atlanta, GA', 'Miami, FL', 'Phoenix, AZ', 'Dallas, TX'
    ];

    const avatars = [
      'https://images.unsplash.com/photo-1494790108755-2616b612ec00?w=40&h=40&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=40&h=40&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=40&h=40&fit=crop&crop=face'
    ];

    const roles: ('member' | 'moderator')[] = ['member', 'member', 'member', 'member', 'moderator'];

    const additionalMembers = Array.from({ length: 180 }, (_, i) => {
      const index = i % names.length;
      const roleIndex = i % roles.length;
      return {
        id: (i + 4).toString(),
        name: names[index],
        username: names[index].toLowerCase().replace(' ', '.') + (i > names.length ? i : ''),
        avatar: avatars[i % avatars.length],
        role: roles[roleIndex],
        bio: 'Community member passionate about technology and innovation.',
        location: locations[i % locations.length],
        joinDate: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
        postsCount: Math.floor(Math.random() * 20),
        commentsCount: Math.floor(Math.random() * 100),
        isOnline: Math.random() > 0.7,
        lastSeen: ['now', '1 hour ago', '2 hours ago', '1 day ago', '2 days ago'][Math.floor(Math.random() * 5)]
      };
    });

    return [...baseMembers, ...additionalMembers];
  };

  const [members] = useState<Member[]>(generateMembers());

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.username.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === 'all' || member.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  const sortedMembers = [...filteredMembers].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'joinDate':
        return new Date(b.joinDate).getTime() - new Date(a.joinDate).getTime();
      case 'posts':
        return b.postsCount - a.postsCount;
      case 'activity':
        if (a.isOnline && !b.isOnline) return -1;
        if (!a.isOnline && b.isOnline) return 1;
        return 0;
      default:
        return 0;
    }
  });

  const totalPages = Math.ceil(sortedMembers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMembers = sortedMembers.slice(startIndex, endIndex);

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'admin':
        return <Crown className="h-3 w-3 text-purple-600" />;
      case 'moderator':
        return <Shield className="h-3 w-3 text-yellow-600" />;
      default:
        return null;
    }
  };

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'admin':
        return <Badge variant="secondary" className="text-xs" style={{ backgroundColor: `${communitySettings.primaryColor}20`, color: communitySettings.primaryColor }}>Admin</Badge>;
      case 'moderator':
        return <Badge variant="secondary" className="text-xs bg-yellow-100 text-yellow-700">Moderator</Badge>;
      default:
        return null;
    }
  };

  const handleDeleteMember = (memberId: string) => {
    console.log('Delete member:', memberId);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Community Members</h2>
            <p className="text-gray-600">Manage and view all {members.length} community members</p>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-gray-400" />
            <span className="text-lg font-semibold text-gray-900">{filteredMembers.length}</span>
            <span className="text-sm text-gray-500">of {members.length} members</span>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search members by name or username..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="whitespace-nowrap">
                  <Filter className="h-4 w-4 mr-2" />
                  {selectedRole === 'all' ? 'All Roles' : selectedRole}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSelectedRole('all')}>All Roles</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedRole('admin')}>Admin</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedRole('moderator')}>Moderator</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedRole('member')}>Member</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="whitespace-nowrap">
                  Sort: {sortBy === 'name' ? 'Name' : sortBy === 'joinDate' ? 'Recent' : sortBy === 'posts' ? 'Posts' : 'Activity'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSortBy('name')}>Name</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('joinDate')}>Most Recent</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('posts')}>Most Posts</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('activity')}>Recently Active</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Members Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Member</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Role</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">Posts</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">Comments</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Joined</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentMembers.map((member) => (
                <tr key={member.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => onViewProfile(member.id)}>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={member.avatar} />
                          <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        {member.isOnline && (
                          <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-green-500 border-2 border-white rounded-full" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{member.name}</div>
                        <div className="text-sm text-gray-500">@{member.username}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-1">
                      {getRoleIcon(member.role)}
                      {getRoleBadge(member.role)}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="font-medium text-gray-900">{member.postsCount}</span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="font-medium text-gray-900">{member.commentsCount}</span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className={`h-2 w-2 rounded-full ${member.isOnline ? 'bg-green-500' : 'bg-gray-400'}`} />
                      <span className="text-sm text-gray-600">
                        {member.isOnline ? 'Online' : member.lastSeen}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm text-gray-600">
                      {new Date(member.joinDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger 
                        asChild
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={(e) => { e.stopPropagation(); onViewProfile(member.id); }}>
                          <Eye className="h-4 w-4 mr-2" />
                          View Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Send Message
                        </DropdownMenuItem>
                        {currentUser.role === 'admin' && member.role !== 'admin' && (
                          <DropdownMenuItem 
                            onClick={(e) => { e.stopPropagation(); handleDeleteMember(member.id); }}
                            className="text-red-600"
                          >
                            <UserMinus className="h-4 w-4 mr-2" />
                            Remove Member
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 bg-gray-50">
            <div className="text-sm text-gray-600">
              Showing {startIndex + 1} to {Math.min(endIndex, sortedMembers.length)} of {sortedMembers.length} members
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              
              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  
                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? "default" : "outline"}
                      size="sm"
                      onClick={() => handlePageChange(pageNum)}
                      className="h-8 w-8 p-0"
                    >
                      {pageNum}
                    </Button>
                  );
                })}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Empty State */}
      {sortedMembers.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No members found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
}
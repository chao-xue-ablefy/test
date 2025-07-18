import React, { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader } from './ui/card';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Separator } from './ui/separator';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { 
  Users, Clock, Check, X, MoreVertical, Eye, Mail, Calendar,
  UserPlus, Shield, AlertCircle, ChevronDown, Filter
} from 'lucide-react';

interface PendingRequest {
  id: string;
  name: string;
  email: string;
  message?: string;
  avatar?: string;
  requestDate: string;
  status: 'pending' | 'approved' | 'rejected';
}

interface PendingMembersPanelProps {
  communitySettings: {
    primaryColor: string;
    secondaryColor: string;
  };
  currentUser: {
    name: string;
    avatar: string;
    role: string;
  };
  isPrivate: boolean;
  onTogglePrivacy: () => void;
}

export default function PendingMembersPanel({ 
  communitySettings, 
  currentUser, 
  isPrivate,
  onTogglePrivacy 
}: PendingMembersPanelProps) {
  const [pendingRequests, setPendingRequests] = useState<PendingRequest[]>([
    {
      id: '1',
      name: 'Alex Thompson',
      email: 'alex.thompson@company.com',
      message: 'Hi! I\'m a senior frontend developer with 5+ years of experience. I\'d love to join this community to share knowledge and learn from other tech professionals.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      requestDate: '2 hours ago',
      status: 'pending'
    },
    {
      id: '2',
      name: 'Emily Rodriguez',
      email: 'emily.rodriguez@startup.com',
      message: 'I\'m a product manager working in the fintech space. Really excited about the discussions happening here!',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612ec00?w=40&h=40&fit=crop&crop=face',
      requestDate: '5 hours ago',
      status: 'pending'
    },
    {
      id: '3',
      name: 'David Park',
      email: 'david.park@techcorp.com',
      message: 'Backend engineer specializing in distributed systems. Looking forward to contributing to the community.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      requestDate: '1 day ago',
      status: 'pending'
    },
    {
      id: '4',
      name: 'Lisa Chen',
      email: 'lisa.chen@design.com',
      message: '',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      requestDate: '2 days ago',
      status: 'pending'
    }
  ]);

  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('pending');

  const handleApprove = (requestId: string) => {
    setPendingRequests(requests =>
      requests.map(request =>
        request.id === requestId
          ? { ...request, status: 'approved' as const }
          : request
      )
    );
  };

  const handleReject = (requestId: string) => {
    setPendingRequests(requests =>
      requests.map(request =>
        request.id === requestId
          ? { ...request, status: 'rejected' as const }
          : request
      )
    );
  };

  const filteredRequests = pendingRequests.filter(request => {
    if (filter === 'all') return true;
    return request.status === filter;
  });

  const pendingCount = pendingRequests.filter(r => r.status === 'pending').length;
  const approvedCount = pendingRequests.filter(r => r.status === 'approved').length;
  const rejectedCount = pendingRequests.filter(r => r.status === 'rejected').length;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">Pending</Badge>;
      case 'approved':
        return <Badge variant="secondary" className="bg-green-100 text-green-700">Approved</Badge>;
      case 'rejected':
        return <Badge variant="secondary" className="bg-red-100 text-red-700">Rejected</Badge>;
      default:
        return null;
    }
  };

  if (!isPrivate) {
    // Public community panel
    return (
      <div className="space-y-4">
        {/* Privacy Toggle */}
        <Card className="bg-blue-50/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Public Community</h3>
                  <p className="text-sm text-gray-600">Anyone can join automatically</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={onTogglePrivacy}
                className="text-blue-600 border-blue-200 hover:bg-blue-50"
              >
                <Shield className="h-4 w-4 mr-2" />
                Make Private
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Joins */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <UserPlus className="h-4 w-4 text-gray-600" />
              <h3 className="font-semibold text-gray-900">Recent Members</h3>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              Auto-approved
            </Badge>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50 border border-green-200">
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" />
                <AvatarFallback>AT</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Alex Thompson</p>
                <p className="text-sm text-gray-500">alex.thompson@company.com</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Joined 2 hours ago</p>
                <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                  <Check className="h-3 w-3 mr-1" />
                  Active
                </Badge>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50 border border-green-200">
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612ec00?w=40&h=40&fit=crop&crop=face" />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Emily Rodriguez</p>
                <p className="text-sm text-gray-500">emily.rodriguez@startup.com</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Joined 5 hours ago</p>
                <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                  <Check className="h-3 w-3 mr-1" />
                  Active
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Private community panel
  return (
    <div className="space-y-4">
      {/* Privacy Toggle */}
      <Card className="bg-orange-50/50">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Shield className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Private Community</h3>
                <p className="text-sm text-gray-600">Requires admin approval to join</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={onTogglePrivacy}
              className="text-orange-600 border-orange-200 hover:bg-orange-50"
            >
              <Users className="h-4 w-4 mr-2" />
              Make Public
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <Card className="bg-yellow-50">
          <CardContent className="p-3 text-center">
            <div className="font-semibold text-lg text-yellow-700">{pendingCount}</div>
            <div className="text-xs text-yellow-600">Pending</div>
          </CardContent>
        </Card>
        <Card className="bg-green-50">
          <CardContent className="p-3 text-center">
            <div className="font-semibold text-lg text-green-700">{approvedCount}</div>
            <div className="text-xs text-green-600">Approved</div>
          </CardContent>
        </Card>
        <Card className="bg-red-50">
          <CardContent className="p-3 text-center">
            <div className="font-semibold text-lg text-red-700">{rejectedCount}</div>
            <div className="text-xs text-red-600">Rejected</div>
          </CardContent>
        </Card>
      </div>

      {/* Filter */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-gray-600" />
          <h3 className="font-semibold text-gray-900">Membership Requests</h3>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              {filter === 'all' ? 'All' : filter.charAt(0).toUpperCase() + filter.slice(1)}
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setFilter('all')}>All Requests</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilter('pending')}>Pending</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilter('approved')}>Approved</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilter('rejected')}>Rejected</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Requests List */}
      <div className="space-y-3">
        {filteredRequests.length === 0 ? (
          <Card>
            <CardContent className="p-6 text-center">
              <AlertCircle className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">No {filter === 'all' ? '' : filter} requests found</p>
            </CardContent>
          </Card>
        ) : (
          filteredRequests.map((request) => (
            <Card key={request.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={request.avatar} />
                    <AvatarFallback>{request.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900">{request.name}</h4>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Mail className="h-3 w-3" />
                          {request.email}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusBadge(request.status)}
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Mail className="h-4 w-4 mr-2" />
                              Send Message
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                    
                    {request.message && (
                      <div className="bg-gray-50 rounded-lg p-3 mb-3">
                        <p className="text-sm text-gray-700 leading-relaxed">
                          "{request.message}"
                        </p>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar className="h-3 w-3" />
                        Requested {request.requestDate}
                      </div>
                      
                      {request.status === 'pending' && (
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleReject(request.id)}
                            className="text-red-600 border-red-200 hover:bg-red-50"
                          >
                            <X className="h-3 w-3 mr-1" />
                            Reject
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => handleApprove(request.id)}
                            className="bg-green-600 hover:bg-green-700 text-white"
                          >
                            <Check className="h-3 w-3 mr-1" />
                            Approve
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
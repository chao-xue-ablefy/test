import React, { useState } from 'react';
import exampleImage from 'figma:asset/4c426b1225366c9768a7de798776074a1360bf34.png';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';
import { Users, Star, ArrowRight, Lock, MessageCircle, TrendingUp, Shield, Eye, EyeOff } from 'lucide-react';

interface CommunitySettings {
  name: string;
  description: string;
  heroImage: string;
  primaryColor: string;
  secondaryColor: string;
  logo: string;
}

interface PrivateCommunityLockPageProps {
  communitySettings: CommunitySettings;
  onRequestSubmit: (request: {
    email: string;
    password: string;
    message: string;
    name: string;
  }) => void;
  onLogin: (credentials: { email: string; password: string }) => void;
}

export default function PrivateCommunityLockPage({ 
  communitySettings, 
  onRequestSubmit, 
  onLogin 
}: PrivateCommunityLockPageProps) {
  const [activeTab, setActiveTab] = useState('request');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    message: ''
  });
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [showPreview, setShowPreview] = useState(false);

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      onRequestSubmit(formData);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.email && loginData.password) {
      onLogin(loginData);
    }
  };

  // Generic member avatars for preview (not revealing actual members)
  const previewAvatars = [
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1494790108755-2616b612b330?w=40&h=40&fit=crop&crop=face'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner Section */}
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={communitySettings.heroImage}
          alt="Community Banner"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Banner Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-8">
          <div className="max-w-2xl mx-auto space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              {communitySettings.name}
            </h1>
            <p className="text-xl text-white/90 max-w-lg mx-auto">
              {communitySettings.description}
            </p>
            
            {/* Community Preview Hint */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Users className="h-5 w-5" />
                <span className="font-medium">183+ Members</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <MessageCircle className="h-5 w-5" />
                <span className="font-medium">Active Discussions</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <TrendingUp className="h-5 w-5" />
                <span className="font-medium">Growing Community</span>
              </div>
            </div>
          </div>
        </div>

        {/* Private Badge */}
        <div className="absolute top-6 right-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white">
            <Shield className="w-4 h-4" />
            <span className="font-medium">Private Community</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Side - Community Preview */}
          <div className="space-y-6">
            {/* Community Info */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md">
                  <ImageWithFallback
                    src={communitySettings.logo}
                    alt="Community Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {communitySettings.name}
                  </h2>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Private Community</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {communitySettings.description}
              </p>

              {/* Preview Toggle */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Eye className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Community Preview</h4>
                    <p className="text-sm text-gray-600">Get a sneak peek of what's inside</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowPreview(!showPreview)}
                  className="flex items-center gap-2"
                >
                  {showPreview ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  {showPreview ? 'Hide' : 'Preview'}
                </Button>
              </div>
            </div>

            {/* Community Preview */}
            {showPreview && (
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-4">What's happening inside</h3>
                
                {/* Mock Discussion Preview */}
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium">A</span>
                      </div>
                      <div>
                        <div className="w-20 h-3 bg-gray-300 rounded mb-1"></div>
                        <div className="w-16 h-2 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-3 bg-gray-200 rounded"></div>
                      <div className="w-4/5 h-3 bg-gray-200 rounded"></div>
                    </div>
                    <div className="flex items-center gap-4 mt-3">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-red-200 rounded"></div>
                        <span className="text-xs text-gray-400">24</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-blue-200 rounded"></div>
                        <span className="text-xs text-gray-400">12</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium">B</span>
                      </div>
                      <div>
                        <div className="w-24 h-3 bg-gray-300 rounded mb-1"></div>
                        <div className="w-12 h-2 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-3 bg-gray-200 rounded"></div>
                      <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Member Preview */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-3">Active Members</h4>
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {previewAvatars.map((avatar, index) => (
                        <div
                          key={index}
                          className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                        >
                          <ImageWithFallback
                            src={avatar}
                            alt={`Member ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs text-gray-600">
                        +179
                      </div>
                    </div>
                    <span className="text-sm text-gray-600">and many more...</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                  <p className="text-sm text-purple-700">
                    🔒 This is just a preview. Join to see all discussions, connect with members, and participate in the community!
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Join Form */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200 rounded-full text-orange-700 text-sm font-medium mb-4">
                  <Lock className="w-3 h-3" />
                  Access Required
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Join the Community
                </h2>
                <p className="text-gray-600">
                  Request access to connect with 183+ members and join the conversation
                </p>
              </div>

              {/* Tab Navigation */}
              <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
                <button
                  onClick={() => setActiveTab('request')}
                  className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
                    activeTab === 'request'
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Request Access
                </button>
                <button
                  onClick={() => setActiveTab('login')}
                  className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
                    activeTab === 'login'
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Member Login
                </button>
              </div>

              {/* Form Content */}
              <div className="space-y-4">
                {activeTab === 'request' ? (
                  <form onSubmit={handleRequestSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full h-12 bg-gray-50 border-0 rounded-xl placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-12 bg-gray-50 border-0 rounded-xl placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Create Password
                      </label>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="w-full h-12 bg-gray-50 border-0 rounded-xl placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tell us about yourself <span className="text-gray-400 font-normal">(Optional)</span>
                      </label>
                      <Textarea
                        placeholder="Share your background, interests, or what you hope to contribute to the community..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-gray-50 border-0 rounded-xl placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all resize-none"
                        rows={4}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium transition-all"
                    >
                      Request to Join
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                ) : (
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={loginData.email}
                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                        className="w-full h-12 bg-gray-50 border-0 rounded-xl placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                      </label>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        className="w-full h-12 bg-gray-50 border-0 rounded-xl placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium transition-all"
                    >
                      Sign In
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    <div className="text-center pt-2">
                      <button
                        type="button"
                        className="text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors"
                      >
                        Forgot your password?
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
              <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-1.5">
                  <Users className="h-4 w-4" />
                  <span>183 Members</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span>Premium Community</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Notice */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            By joining, you agree to our community guidelines and terms of service. 
            Your request will be reviewed by our admin team.
          </p>
        </div>
      </div>
    </div>
  );
}
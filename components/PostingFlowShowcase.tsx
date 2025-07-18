import React, { useState } from 'react';
import svgPaths from "../imports/svg-yjyr5se9n9";
import imgDepth4Frame2 from "figma:asset/6227e47a4249ab20b85ee22ba444c9c4ab585f07.png";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader } from './ui/card';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Separator } from './ui/separator';
import { Progress } from './ui/progress';
import { 
  Upload, FileText, Video, Image as ImageIcon, Link2, CheckCircle, 
  AlertCircle, Play, Download, X, Send
} from 'lucide-react';

interface PostingStep {
  id: string;
  title: string;
  status: 'pending' | 'active' | 'completed' | 'error';
  description: string;
}

interface MediaPreview {
  type: 'photo' | 'video' | 'document';
  url: string;
  name?: string;
  thumbnail?: string;
  youtubeId?: string;
}

export default function PostingFlowShowcase() {
  // Photo Upload Flow State
  const [photoSteps, setPhotoSteps] = useState<PostingStep[]>([
    { id: 'select', title: 'Select Photo', status: 'completed', description: 'Choose image file from device' },
    { id: 'upload', title: 'Upload Progress', status: 'completed', description: 'File uploading to server' },
    { id: 'process', title: 'Image Processing', status: 'completed', description: 'Optimizing and generating thumbnails' },
    { id: 'preview', title: 'Preview & Edit', status: 'active', description: 'Review image and add caption' },
    { id: 'publish', title: 'Publish', status: 'pending', description: 'Share with community' }
  ]);

  // Video URL Flow State
  const [videoSteps, setVideoSteps] = useState<PostingStep[]>([
    { id: 'input', title: 'Paste YouTube URL', status: 'completed', description: 'Enter YouTube video link' },
    { id: 'validate', title: 'Validate URL', status: 'completed', description: 'Checking if URL is valid YouTube link' },
    { id: 'fetch', title: 'Fetch Video Info', status: 'completed', description: 'Getting video title, thumbnail, duration' },
    { id: 'embed', title: 'Generate Embed', status: 'active', description: 'Creating embedded video player' },
    { id: 'publish', title: 'Publish', status: 'pending', description: 'Share with community' }
  ]);

  // Document Upload Flow State
  const [documentSteps, setDocumentSteps] = useState<PostingStep[]>([
    { id: 'select', title: 'Select Document', status: 'completed', description: 'Choose PDF, DOC, or other file' },
    { id: 'upload', title: 'Upload Progress', status: 'completed', description: 'File uploading to server' },
    { id: 'scan', title: 'Security Scan', status: 'completed', description: 'Scanning for viruses and malware' },
    { id: 'process', title: 'File Processing', status: 'active', description: 'Generating preview and metadata' },
    { id: 'publish', title: 'Publish', status: 'pending', description: 'Share with community' }
  ]);

  const [photoPreview] = useState<MediaPreview>({
    type: 'photo',
    url: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&h=400&fit=crop'
  });

  const [videoPreview] = useState<MediaPreview>({
    type: 'video',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
  });

  const [documentPreview] = useState<MediaPreview>({
    type: 'document',
    url: '/documents/react-guide.pdf',
    name: 'react-best-practices-guide.pdf'
  });

  const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  const [postContent, setPostContent] = useState({
    photo: 'Just set up my new development workspace! The dual monitor setup is perfect for coding sessions. What does your workspace look like? #workspace #productivity',
    video: 'Found this amazing tutorial on React best practices! Really helped me understand some advanced concepts. Highly recommend watching this! 🎥',
    document: 'Sharing our complete React best practices guide that we\'ve been working on. This covers everything from project structure to performance optimization. Hope it helps! 📄'
  });

  const extractYouTubeId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const handleVideoUrlChange = (url: string) => {
    setVideoUrl(url);
    const youtubeId = extractYouTubeId(url);
    if (youtubeId) {
      // Simulate validation steps
      setTimeout(() => {
        setVideoSteps(prev => prev.map(step => 
          step.id === 'validate' ? { ...step, status: 'completed' } : step
        ));
      }, 500);
      
      setTimeout(() => {
        setVideoSteps(prev => prev.map(step => 
          step.id === 'fetch' ? { ...step, status: 'completed' } : step
        ));
      }, 1000);
      
      setTimeout(() => {
        setVideoSteps(prev => prev.map(step => 
          step.id === 'embed' ? { ...step, status: 'active' } : step
        ));
      }, 1500);
    }
  };

  const renderStepIcon = (status: PostingStep['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'active':
        return <div className="h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return <div className="h-5 w-5 border-2 border-gray-300 rounded-full" />;
    }
  };

  const renderStepList = (steps: PostingStep[]) => (
    <div className="space-y-3">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-1">
            {renderStepIcon(step.status)}
          </div>
          <div className="flex-1">
            <h4 className={`font-medium ${step.status === 'active' ? 'text-blue-600' : step.status === 'completed' ? 'text-green-600' : 'text-gray-600'}`}>
              {step.title}
            </h4>
            <p className="text-sm text-gray-500">{step.description}</p>
            {step.status === 'active' && (
              <Progress value={65} className="w-full mt-2 h-2" />
            )}
          </div>
        </div>
      ))}
    </div>
  );

  const renderPostPreview = (type: 'photo' | 'video' | 'document', preview: MediaPreview, content: string) => (
    <Card className="mt-4">
      <CardContent className="p-6">
        {/* Post Header */}
        <div className="flex items-center gap-3 mb-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={imgDepth4Frame2} />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-gray-900">Sarah Chen</h3>
              <Badge variant="secondary" className="text-xs" style={{ backgroundColor: '#7444ef20', color: '#7444ef' }}>
                admin
              </Badge>
            </div>
            <p className="text-sm text-gray-500">now</p>
          </div>
        </div>

        {/* Post Content */}
        <div className="mb-4">
          <p className="text-gray-700">{content}</p>
          
          {/* Media Preview */}
          {type === 'photo' && (
            <div className="mt-4 rounded-lg overflow-hidden">
              <ImageWithFallback
                src={preview.url}
                alt="Post image"
                className="w-full max-h-96 object-cover"
              />
            </div>
          )}
          
          {type === 'video' && preview.youtubeId && (
            <div className="mt-4 relative rounded-lg overflow-hidden bg-black aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${preview.youtubeId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          )}
          
          {type === 'document' && (
            <div className="mt-4 p-4 border border-gray-200 rounded-lg bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{preview.name}</p>
                  <p className="text-sm text-gray-500">PDF Document • 2.5 MB</p>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Post Actions */}
        <Separator className="mb-4" />
        <div className="flex items-center gap-6">
          <Button variant="ghost" size="sm" className="text-gray-600">
            <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            0
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-600">
            <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            0
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4 py-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900">Post Creation Flow Showcase</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Explore the complete step-by-step process for creating different types of posts in our community platform.
          Each flow demonstrates the real-time status updates and user experience from start to finish.
        </p>
      </div>

      {/* Photo Upload Flow */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <ImageIcon className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Photo Upload Flow</h3>
              <p className="text-sm text-gray-600">Uploading and sharing images with the community</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Steps */}
            <div>
              <h4 className="font-medium mb-4">Upload Process Steps</h4>
              {renderStepList(photoSteps)}
              
              {/* Upload Interface */}
              <div className="mt-6 p-4 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
                <div className="text-center">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Drag & drop your image here or click to browse</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    <ImageIcon className="h-4 w-4 mr-2" />
                    Choose File
                  </Button>
                </div>
                <div className="mt-4">
                  <div className="text-xs text-gray-500 mb-1">workspace-setup.jpg • 2.3 MB</div>
                  <Progress value={85} className="h-2" />
                  <div className="text-xs text-gray-500 mt-1">Uploading... 85% complete</div>
                </div>
              </div>
            </div>
            
            {/* Preview */}
            <div>
              <h4 className="font-medium mb-4">Live Preview</h4>
              <textarea
                value={postContent.photo}
                onChange={(e) => setPostContent(prev => ({ ...prev, photo: e.target.value }))}
                placeholder="What's on your mind?"
                className="w-full p-3 border border-gray-200 rounded-lg resize-none"
                rows={3}
              />
              {renderPostPreview('photo', photoPreview, postContent.photo)}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Video URL Flow */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <Video className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">YouTube Video Embedding Flow</h3>
              <p className="text-sm text-gray-600">Paste YouTube URLs to embed videos in posts</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Steps */}
            <div>
              <h4 className="font-medium mb-4">Embedding Process Steps</h4>
              {renderStepList(videoSteps)}
              
              {/* URL Input Interface */}
              <div className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">YouTube Video URL</label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Link2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        value={videoUrl}
                        onChange={(e) => handleVideoUrlChange(e.target.value)}
                        placeholder="https://www.youtube.com/watch?v=..."
                        className="pl-10"
                      />
                    </div>
                    <Button>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Validate
                    </Button>
                  </div>
                </div>
                
                {extractYouTubeId(videoUrl) && (
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800">Valid YouTube URL detected</span>
                    </div>
                    <div className="text-xs text-green-600 mt-1">
                      Video ID: {extractYouTubeId(videoUrl)}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Preview */}
            <div>
              <h4 className="font-medium mb-4">Live Preview</h4>
              <textarea
                value={postContent.video}
                onChange={(e) => setPostContent(prev => ({ ...prev, video: e.target.value }))}
                placeholder="Share something about this video..."
                className="w-full p-3 border border-gray-200 rounded-lg resize-none"
                rows={3}
              />
              {renderPostPreview('video', videoPreview, postContent.video)}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Document Upload Flow */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Document Upload Flow</h3>
              <p className="text-sm text-gray-600">Sharing PDFs, documents, and other files</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Steps */}
            <div>
              <h4 className="font-medium mb-4">Upload Process Steps</h4>
              {renderStepList(documentSteps)}
              
              {/* Upload Interface */}
              <div className="mt-6 space-y-4">
                <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
                  <div className="text-center">
                    <FileText className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Upload PDF, DOC, or other documents</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      <FileText className="h-4 w-4 mr-2" />
                      Choose Document
                    </Button>
                  </div>
                </div>
                
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-6 w-6 text-blue-600" />
                    <div className="flex-1">
                      <div className="font-medium text-sm">react-best-practices-guide.pdf</div>
                      <div className="text-xs text-gray-500">2.5 MB • PDF Document</div>
                    </div>
                    <div className="text-xs text-blue-600">Processing...</div>
                  </div>
                  <Progress value={75} className="mt-2 h-2" />
                </div>
              </div>
            </div>
            
            {/* Preview */}
            <div>
              <h4 className="font-medium mb-4">Live Preview</h4>
              <textarea
                value={postContent.document}
                onChange={(e) => setPostContent(prev => ({ ...prev, document: e.target.value }))}
                placeholder="Tell the community about this document..."
                className="w-full p-3 border border-gray-200 rounded-lg resize-none"
                rows={3}
              />
              {renderPostPreview('document', documentPreview, postContent.document)}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Post Creation Interface */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 20 20">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.67"
                  d={svgPaths.p24941500}
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Complete Post Creation Interface</h3>
              <p className="text-sm text-gray-600">The unified interface for creating all types of posts</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="backdrop-blur-[2px] backdrop-filter bg-[rgba(255,255,255,0.9)] box-border content-stretch flex flex-col gap-6 items-center justify-start overflow-clip pb-0 pt-[23.75px] px-0 relative rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] w-full">
            {/* Header */}
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-[800px]">
              <div className="relative shrink-0 size-5">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path
                    d={svgPaths.p24941500}
                    stroke="var(--stroke-0, #A855F7)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.66667"
                  />
                  <path
                    d="M16.6667 2.5V5.83333"
                    stroke="var(--stroke-0, #A855F7)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.66667"
                  />
                  <path
                    d="M18.3333 4.16667H15"
                    stroke="var(--stroke-0, #A855F7)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.66667"
                  />
                  <path
                    d="M3.33333 14.1667V15.8333"
                    stroke="var(--stroke-0, #A855F7)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.66667"
                  />
                  <path
                    d="M4.16667 15H2.5"
                    stroke="var(--stroke-0, #A855F7)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.66667"
                  />
                </svg>
              </div>
              <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#020817] text-[17.2969px] text-left text-nowrap tracking-[-0.45px]">
                <p className="block leading-[28px] whitespace-pre">Share something amazing</p>
              </div>
            </div>

            {/* Content */}
            <div className="relative shrink-0 w-full">
              <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start pb-6 pt-0 px-6 relative w-full">
                {/* Author */}
                <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
                  <div
                    className="bg-center bg-cover bg-no-repeat rounded-3xl shrink-0 size-12"
                    style={{ backgroundImage: `url('${imgDepth4Frame2}')` }}
                  />
                  <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                    <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[15.625px] text-gray-900 text-left text-nowrap">
                      <p className="block leading-[24px] whitespace-pre">Sarah Chen</p>
                    </div>
                  </div>
                </div>

                {/* Textarea */}
                <div className="bg-gray-50 box-border content-stretch flex flex-row gap-2.5 h-40 items-start justify-start min-h-[100px] overflow-auto px-3 py-2 relative rounded-xl shrink-0 w-full">
                  <textarea
                    placeholder="What's on your mind? Share insights, ask questions, or start a discussion..."
                    className="w-full h-full bg-transparent border-none resize-none focus:outline-none text-[13.6719px] text-slate-500"
                  />
                </div>

                {/* Action Buttons */}
                <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
                    {/* Photo Button */}
                    <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-0 relative rounded-xl shrink-0 hover:bg-gray-100">
                      <div className="box-border content-stretch flex flex-col h-4 items-start justify-start pl-0 pr-2 py-0 relative shrink-0 w-6">
                        <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-4">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                            <path
                              d={svgPaths.p3c2f47f0}
                              stroke="var(--stroke-0, #020817)"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.33333"
                            />
                            <path
                              d={svgPaths.p24e3ba80}
                              stroke="var(--stroke-0, #020817)"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.33333"
                            />
                            <path
                              d={svgPaths.p2eb22d00}
                              stroke="var(--stroke-0, #020817)"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.33333"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#020817] text-[13.7812px] text-center text-nowrap">
                        <p className="block leading-[20px] whitespace-pre">Photo</p>
                      </div>
                    </div>

                    {/* Video Button */}
                    <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-0 relative rounded-xl shrink-0 hover:bg-gray-100">
                      <div className="box-border content-stretch flex flex-col h-4 items-start justify-start pl-0 pr-2 py-0 relative shrink-0 w-6">
                        <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-4">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 10">
                            <path
                              d={svgPaths.p134667c0}
                              stroke="var(--stroke-0, #020817)"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.33333"
                            />
                            <path
                              d={svgPaths.p2ca9e00}
                              stroke="var(--stroke-0, #020817)"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.33333"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#020817] text-[13.6719px] text-center text-nowrap">
                        <p className="block leading-[20px] whitespace-pre">Video</p>
                      </div>
                    </div>

                    {/* Document Button */}
                    <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-center px-3 py-0 relative rounded-xl shrink-0 hover:bg-gray-100">
                      <div className="box-border content-stretch flex flex-col h-4 items-start justify-start pl-0 pr-2 py-0 relative shrink-0 w-6">
                        <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-4">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 15">
                            <path
                              d={svgPaths.p2ddad400}
                              stroke="var(--stroke-0, #020817)"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.33333"
                            />
                            <path
                              d={svgPaths.p3132d200}
                              stroke="var(--stroke-0, #020817)"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.33333"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#020817] text-[13.7812px] text-center text-nowrap">
                        <p className="block leading-[20px] whitespace-pre">Document</p>
                      </div>
                    </div>
                  </div>

                  {/* Post Button */}
                  <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0 w-24">
                    <div className="basis-0 bg-gradient-to-r from-[#3b82f6] grow h-10 min-h-px min-w-px relative rounded-xl shrink-0 to-[#9333ea]">
                      <div className="flex flex-row items-center justify-center relative size-full">
                        <div className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-4 py-2 relative w-full">
                          <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.7812px] text-center text-nowrap text-slate-50">
                            <p className="block leading-[20px] whitespace-pre">Post</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Flow Summary */}
      <div className="bg-gray-50 rounded-lg p-6 space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Posting Flow Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Photo Posts</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Drag & drop file upload</li>
              <li>• Real-time upload progress</li>
              <li>• Image optimization</li>
              <li>• Thumbnail generation</li>
              <li>• Live preview</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Video Posts</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• YouTube URL validation</li>
              <li>• Automatic metadata fetching</li>
              <li>• Embedded video player</li>
              <li>• Thumbnail extraction</li>
              <li>• Responsive video player</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Document Posts</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Multiple file format support</li>
              <li>• Security scanning</li>
              <li>• File type detection</li>
              <li>• Download functionality</li>
              <li>• File size validation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
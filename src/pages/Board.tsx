import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MessageSquare, ThumbsUp, Search, Plus } from "lucide-react";
import { useState } from "react";

const Board = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // 임시 데이터
  const posts = [
    {
      id: 1,
      title: "ChatGPT API 사용법 공유합니다!",
      author: "AI학습자",
      category: "정보공유",
      content: "ChatGPT API를 프로젝트에 적용하는 방법을 정리했어요...",
      likes: 24,
      comments: 12,
      createdAt: "2시간 전"
    },
    {
      id: 2,
      title: "스터디 멤버 모집합니다 (머신러닝 입문)",
      author: "공부왕",
      category: "스터디모집",
      content: "주 2회 온라인으로 머신러닝 기초를 같이 공부할 분들을 찾습니다...",
      likes: 15,
      comments: 8,
      createdAt: "5시간 전"
    },
    {
      id: 3,
      title: "이번 주 모각AI 일정 (토요일 오후 2시)",
      author: "모각AI조직자",
      category: "모각AI",
      content: "이번 주 토요일 오후 2시에 온라인 모각AI 진행합니다...",
      likes: 32,
      comments: 18,
      createdAt: "1일 전"
    },
    {
      id: 4,
      title: "LangChain 프로젝트 협업하실 분?",
      author: "개발자123",
      category: "프로젝트",
      content: "LangChain으로 챗봇 만드는 프로젝트 같이 하실 분 찾습니다...",
      likes: 19,
      comments: 6,
      createdAt: "1일 전"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "정보공유": "bg-blue-500/10 text-blue-500 border-blue-500/20",
      "스터디모집": "bg-green-500/10 text-green-500 border-green-500/20",
      "모각AI": "bg-purple-500/10 text-purple-500 border-purple-500/20",
      "프로젝트": "bg-orange-500/10 text-orange-500 border-orange-500/20"
    };
    return colors[category] || "bg-gray-500/10 text-gray-500 border-gray-500/20";
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">커뮤니티 게시판</h1>
          <p className="text-muted-foreground">AI에 대한 정보를 자유롭게 공유하고 소통하세요</p>
        </div>

        {/* Search & Actions */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="게시글 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button style={{ background: "var(--gradient-primary)" }} className="text-white">
            <Plus className="h-4 w-4 mr-2" />
            글쓰기
          </Button>
        </div>

        {/* Posts List */}
        <div className="space-y-4">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border-border"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getCategoryColor(post.category)} variant="outline">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{post.createdAt}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {post.content}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{post.author}</span>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;

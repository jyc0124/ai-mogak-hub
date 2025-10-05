import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Video, FileText, ExternalLink, Search, Plus, ThumbsUp, Bookmark } from "lucide-react";
import { useState } from "react";

const Share = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // 임시 데이터
  const resources = [
    {
      id: 1,
      type: "video",
      title: "머신러닝 입문 완강 강의 (무료)",
      description: "앤드류 응 교수님의 머신러닝 기초 강의입니다. 초보자에게 강력 추천!",
      url: "https://www.youtube.com/watch?v=...",
      author: "추천봇",
      category: "머신러닝",
      likes: 45,
      bookmarks: 23,
      createdAt: "1일 전"
    },
    {
      id: 2,
      type: "video",
      title: "ChatGPT API 실전 활용법",
      description: "ChatGPT API를 활용해서 챗봇 만드는 방법을 단계별로 알려드립니다",
      url: "https://www.youtube.com/watch?v=...",
      author: "개발자123",
      category: "LLM",
      likes: 38,
      bookmarks: 19,
      createdAt: "2일 전"
    },
    {
      id: 3,
      type: "document",
      title: "딥러닝 기초 정리 노트",
      description: "딥러닝 기본 개념부터 CNN, RNN까지 정리한 노트입니다",
      url: "https://notion.so/...",
      author: "공부왕",
      category: "딥러닝",
      likes: 52,
      bookmarks: 31,
      createdAt: "3일 전"
    },
    {
      id: 4,
      type: "document",
      title: "Transformer 논문 해설",
      description: "Attention is All You Need 논문을 쉽게 풀어쓴 글입니다",
      url: "https://medium.com/...",
      author: "AI연구자",
      category: "논문",
      likes: 67,
      bookmarks: 42,
      createdAt: "5일 전"
    },
    {
      id: 5,
      type: "video",
      title: "LangChain 프로젝트 실습",
      description: "LangChain으로 실제 프로젝트를 만들어보는 튜토리얼",
      url: "https://www.youtube.com/watch?v=...",
      author: "코딩마스터",
      category: "LangChain",
      likes: 29,
      bookmarks: 15,
      createdAt: "1주일 전"
    },
    {
      id: 6,
      type: "document",
      title: "AI 면접 질문 모음집",
      description: "실제 AI 엔지니어 면접에서 나온 질문들을 정리했습니다",
      url: "https://github.com/...",
      author: "취준생",
      category: "기타",
      likes: 89,
      bookmarks: 56,
      createdAt: "1주일 전"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "머신러닝": "bg-blue-500/10 text-blue-500 border-blue-500/20",
      "딥러닝": "bg-purple-500/10 text-purple-500 border-purple-500/20",
      "LLM": "bg-green-500/10 text-green-500 border-green-500/20",
      "LangChain": "bg-orange-500/10 text-orange-500 border-orange-500/20",
      "논문": "bg-pink-500/10 text-pink-500 border-pink-500/20",
      "기타": "bg-gray-500/10 text-gray-500 border-gray-500/20"
    };
    return colors[category] || "bg-gray-500/10 text-gray-500 border-gray-500/20";
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">자료 공유</h1>
          <p className="text-muted-foreground">유용한 AI 강의와 학습 자료를 공유하고 발견하세요</p>
        </div>

        {/* Search & Actions */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="자료 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button style={{ background: "var(--gradient-primary)" }} className="text-white">
            <Plus className="h-4 w-4 mr-2" />
            자료 공유하기
          </Button>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((resource) => (
            <Card
              key={resource.id}
              className="p-6 hover:shadow-lg transition-all duration-300 border-border"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  {resource.type === "video" ? (
                    <Video className="h-5 w-5 text-primary" />
                  ) : (
                    <FileText className="h-5 w-5 text-primary" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-lg leading-tight">{resource.title}</h3>
                    <Badge className={getCategoryColor(resource.category)} variant="outline">
                      {resource.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{resource.author}</span>
                  <span>{resource.createdAt}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-4">
                <Button variant="ghost" size="sm" className="flex-1">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  {resource.likes}
                </Button>
                <Button variant="ghost" size="sm" className="flex-1">
                  <Bookmark className="h-4 w-4 mr-1" />
                  {resource.bookmarks}
                </Button>
                <Button size="sm" className="flex-1" asChild>
                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    보기
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Share;

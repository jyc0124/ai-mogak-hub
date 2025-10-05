import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { User, MessageSquare, Calendar, Settings } from "lucide-react";
import { useState } from "react";

const MyPage = () => {
  const [nickname, setNickname] = useState("AI학습자");
  const [email, setEmail] = useState("user@example.com");

  // 임시 데이터
  const myPosts = [
    {
      id: 1,
      title: "ChatGPT API 사용법 공유합니다!",
      category: "정보공유",
      likes: 24,
      comments: 12,
      createdAt: "2일 전"
    },
    {
      id: 2,
      title: "딥러닝 공부 방법 추천해주세요",
      category: "질문",
      likes: 8,
      comments: 15,
      createdAt: "1주일 전"
    }
  ];

  const myStudies = [
    {
      id: 1,
      title: "머신러닝 기초 스터디",
      status: "진행중",
      participants: 8,
      nextSession: "2025.10.10 (화) 20:00"
    },
    {
      id: 2,
      title: "딥러닝 논문 리뷰 스터디",
      status: "진행중",
      participants: 5,
      nextSession: "2025.10.12 (토) 14:00"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">마이페이지</h1>
          <p className="text-muted-foreground">내 활동과 프로필을 관리하세요</p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="profile">
              <User className="h-4 w-4 mr-2" />
              프로필
            </TabsTrigger>
            <TabsTrigger value="posts">
              <MessageSquare className="h-4 w-4 mr-2" />
              내가 쓴 글
            </TabsTrigger>
            <TabsTrigger value="studies">
              <Calendar className="h-4 w-4 mr-2" />
              참여 중인 스터디
            </TabsTrigger>
          </TabsList>

          {/* 프로필 탭 */}
          <TabsContent value="profile">
            <Card className="p-6 border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-20 w-20 rounded-full flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                  <User className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{nickname}</h2>
                  <p className="text-muted-foreground">{email}</p>
                </div>
              </div>

              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nickname">닉네임</Label>
                  <Input
                    id="nickname"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">이메일</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled
                  />
                  <p className="text-xs text-muted-foreground">이메일은 변경할 수 없습니다</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">자기소개</Label>
                  <Input
                    id="bio"
                    placeholder="간단한 자기소개를 입력하세요"
                  />
                </div>

                <div className="pt-4">
                  <Button style={{ background: "var(--gradient-primary)" }} className="text-white">
                    <Settings className="h-4 w-4 mr-2" />
                    프로필 저장
                  </Button>
                </div>
              </form>
            </Card>
          </TabsContent>

          {/* 내가 쓴 글 탭 */}
          <TabsContent value="posts">
            <div className="space-y-4">
              {myPosts.map((post) => (
                <Card
                  key={post.id}
                  className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border-border"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold">{post.title}</h3>
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{post.createdAt}</span>
                    <span>좋아요 {post.likes}</span>
                    <span>댓글 {post.comments}</span>
                  </div>
                </Card>
              ))}

              {myPosts.length === 0 && (
                <Card className="p-12 text-center border-border">
                  <MessageSquare className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">작성한 글이 없습니다</p>
                  <Button className="mt-4" variant="outline">
                    첫 글 작성하기
                  </Button>
                </Card>
              )}
            </div>
          </TabsContent>

          {/* 참여 중인 스터디 탭 */}
          <TabsContent value="studies">
            <div className="space-y-4">
              {myStudies.map((study) => (
                <Card
                  key={study.id}
                  className="p-6 hover:shadow-lg transition-all duration-300 border-border"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{study.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {study.participants}명 참여
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          다음 세션: {study.nextSession}
                        </span>
                      </div>
                    </div>
                    <Badge className="bg-primary text-white">{study.status}</Badge>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm">
                      상세보기
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive">
                      나가기
                    </Button>
                  </div>
                </Card>
              ))}

              {myStudies.length === 0 && (
                <Card className="p-12 text-center border-border">
                  <Calendar className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">참여 중인 스터디가 없습니다</p>
                  <Button className="mt-4" variant="outline">
                    스터디 찾아보기
                  </Button>
                </Card>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MyPage;

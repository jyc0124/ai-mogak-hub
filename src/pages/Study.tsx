import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Users, Clock, MapPin, Search, Plus } from "lucide-react";
import { useState } from "react";

const Study = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // 임시 데이터 - 스터디
  const studies = [
    {
      id: 1,
      title: "머신러닝 기초 스터디",
      description: "Andrew Ng 교수님의 강의를 함께 들으며 공부합니다",
      participants: 8,
      maxParticipants: 12,
      schedule: "매주 화, 목 저녁 8시",
      location: "온라인 (Zoom)",
      tags: ["머신러닝", "초급", "온라인"],
      status: "모집중"
    },
    {
      id: 2,
      title: "딥러닝 논문 리뷰 스터디",
      description: "최신 딥러닝 논문을 읽고 토론하는 스터디입니다",
      participants: 5,
      maxParticipants: 6,
      schedule: "매주 토요일 오후 2시",
      location: "온라인 (Discord)",
      tags: ["딥러닝", "고급", "논문"],
      status: "모집중"
    },
    {
      id: 3,
      title: "LangChain 프로젝트 스터디",
      description: "LangChain으로 실전 프로젝트를 만들어봅니다",
      participants: 10,
      maxParticipants: 10,
      schedule: "매주 수요일 저녁 7시",
      location: "강남역 스터디카페",
      tags: ["LangChain", "중급", "오프라인"],
      status: "마감"
    }
  ];

  // 임시 데이터 - 모각AI
  const mogakAI = [
    {
      id: 1,
      title: "주말 모각AI",
      description: "각자 AI 공부하면서 함께 집중하는 시간!",
      participants: 12,
      date: "2025년 10월 12일 (토)",
      time: "오후 2시 - 6시",
      location: "온라인 (Gather Town)",
      organizer: "모각러"
    },
    {
      id: 2,
      title: "평일 저녁 모각AI",
      description: "퇴근 후 같이 공부해요",
      participants: 8,
      date: "매주 화요일",
      time: "저녁 8시 - 10시",
      location: "온라인 (Discord)",
      organizer: "AI러버"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">스터디 & 모각AI</h1>
          <p className="text-muted-foreground">함께 공부하고 성장할 동료를 찾아보세요</p>
        </div>

        <Tabs defaultValue="study" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="study">스터디</TabsTrigger>
            <TabsTrigger value="mogak">모각AI</TabsTrigger>
          </TabsList>

          {/* 스터디 탭 */}
          <TabsContent value="study" className="space-y-6">
            {/* Search & Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="스터디 검색..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button style={{ background: "var(--gradient-primary)" }} className="text-white">
                <Plus className="h-4 w-4 mr-2" />
                스터디 만들기
              </Button>
            </div>

            {/* Studies List */}
            <div className="grid md:grid-cols-2 gap-6">
              {studies.map((study) => (
                <Card
                  key={study.id}
                  className="p-6 hover:shadow-lg transition-all duration-300 border-border"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold">{study.title}</h3>
                    <Badge
                      variant={study.status === "모집중" ? "default" : "secondary"}
                      className={study.status === "모집중" ? "bg-primary" : ""}
                    >
                      {study.status}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">{study.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{study.participants}/{study.maxParticipants}명</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{study.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{study.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    className="w-full"
                    variant={study.status === "모집중" ? "default" : "secondary"}
                    disabled={study.status === "마감"}
                  >
                    {study.status === "모집중" ? "참가 신청" : "마감됨"}
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* 모각AI 탭 */}
          <TabsContent value="mogak" className="space-y-6">
            {/* Search & Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="모각AI 검색..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button style={{ background: "var(--gradient-primary)" }} className="text-white">
                <Plus className="h-4 w-4 mr-2" />
                모각AI 만들기
              </Button>
            </div>

            {/* Mogak AI List */}
            <div className="grid md:grid-cols-2 gap-6">
              {mogakAI.map((mogak) => (
                <Card
                  key={mogak.id}
                  className="p-6 hover:shadow-lg transition-all duration-300 border-border"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <h3 className="text-xl font-semibold mb-3">{mogak.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{mogak.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{mogak.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{mogak.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{mogak.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{mogak.participants}명 참가 중</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border mb-4">
                    <p className="text-sm text-muted-foreground">
                      주최자: <span className="text-foreground font-medium">{mogak.organizer}</span>
                    </p>
                  </div>

                  <Button className="w-full" variant="default">
                    참가하기
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Study;

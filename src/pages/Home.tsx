import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Users, BookOpen, Video, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: Users,
      title: "커뮤니티 게시판",
      description: "AI에 관심 있는 사람들과 자유롭게 소통하고 정보를 공유하세요.",
      link: "/board"
    },
    {
      icon: BookOpen,
      title: "스터디 & 모각AI",
      description: "함께 공부하고 프로젝트를 진행할 동료를 찾아보세요.",
      link: "/study"
    },
    {
      icon: Video,
      title: "자료 공유",
      description: "유용한 AI 강의와 학습 자료를 공유하고 발견하세요.",
      link: "/share"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Brain className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI 학습 커뮤니티</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            함께 성장하는
            <br />
            AI 커뮤니티
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            AI에 관심 있는 사람들이 모여 정보를 나누고, 함께 공부하며, 프로젝트를 진행하는 공간입니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild style={{ background: "var(--gradient-primary)" }} className="text-white">
              <Link to="/board" className="flex items-center gap-2">
                시작하기
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/study">스터디 둘러보기</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="mb-4 p-3 rounded-lg w-fit" style={{ background: "var(--gradient-primary)" }}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              <Button variant="ghost" asChild className="p-0 h-auto hover:bg-transparent">
                <Link to={feature.link} className="flex items-center gap-2 text-primary hover:gap-3 transition-all">
                  자세히 보기
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 mb-16">
        <Card 
          className="max-w-4xl mx-auto p-8 md:p-12 text-center border-0"
          style={{ background: "var(--gradient-primary)" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            지금 바로 시작하세요
          </h2>
          <p className="text-lg text-white/90 mb-6">
            회원가입하고 AI 커뮤니티의 일원이 되어보세요.
          </p>
          <Button size="lg" variant="secondary" asChild className="bg-white text-primary hover:bg-white/90">
            <Link to="/signup">무료로 시작하기</Link>
          </Button>
        </Card>
      </section>
    </div>
  );
};

export default Home;

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Brain } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import { z } from "zod";

const signupSchema = z.object({
  email: z.string().email("올바른 이메일을 입력해주세요"),
  nickname: z.string().min(2, "닉네임은 최소 2자 이상이어야 합니다").max(20, "닉네임은 최대 20자까지 가능합니다"),
  password: z.string().min(6, "비밀번호는 최소 6자 이상이어야 합니다"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "비밀번호가 일치하지 않습니다",
  path: ["confirmPassword"],
});

const Signup = () => {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [interests, setInterests] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validated = signupSchema.parse({ email, nickname, password, confirmPassword });
      setIsLoading(true);

      const redirectUrl = `${window.location.origin}/`;

      const { error } = await supabase.auth.signUp({
        email: validated.email,
        password: validated.password,
        options: {
          emailRedirectTo: redirectUrl,
          data: {
            nickname: validated.nickname,
            interests: interests,
          }
        }
      });

      if (error) {
        if (error.message.includes("User already registered")) {
          toast.error("이미 가입된 이메일입니다");
        } else {
          toast.error(error.message);
        }
        return;
      }

      toast.success("회원가입 성공! 로그인해주세요.");
      navigate("/login");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md p-8 border-border" style={{ boxShadow: "var(--shadow-elegant)" }}>
        <div className="flex flex-col items-center mb-8">
          <div className="p-3 rounded-lg mb-4" style={{ background: "var(--gradient-primary)" }}>
            <Brain className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold mb-2">회원가입</h1>
          <p className="text-muted-foreground text-center">AI 커뮤니티의 멤버가 되어보세요</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="nickname">닉네임</Label>
            <Input
              id="nickname"
              type="text"
              placeholder="사용할 닉네임을 입력하세요"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">비밀번호</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">비밀번호 확인</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="interests">관심 분야 (선택사항)</Label>
            <Input
              id="interests"
              type="text"
              placeholder="예: 머신러닝, 딥러닝, NLP"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
            />
          </div>

          <Button
            type="submit"
            className="w-full text-white"
            style={{ background: "var(--gradient-primary)" }}
            disabled={isLoading}
          >
            {isLoading ? "가입 중..." : "회원가입"}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-muted-foreground">이미 계정이 있으신가요? </span>
          <Link to="/login" className="text-primary hover:underline font-medium">
            로그인
          </Link>
        </div>

        <div className="mt-4 text-center">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
            ← 홈으로 돌아가기
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Signup;

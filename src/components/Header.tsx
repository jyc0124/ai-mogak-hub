import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Menu, X, LogOut } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    toast.success("로그아웃되었습니다");
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="p-2 rounded-lg" style={{ background: "var(--gradient-primary)" }}>
            <Brain className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            AI 커뮤니티
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/board" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            게시판
          </Link>
          <Link to="/study" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            스터디 & 모각AI
          </Link>
          <Link to="/share" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            자료공유
          </Link>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <Button variant="ghost" asChild>
                <Link to="/mypage">마이페이지</Link>
              </Button>
              <Button 
                variant="ghost" 
                onClick={handleSignOut}
                className="flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                로그아웃
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link to="/login">로그인</Link>
              </Button>
              <Button asChild style={{ background: "var(--gradient-primary)" }} className="text-white">
                <Link to="/signup">회원가입</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto flex flex-col gap-4 p-4">
            <Link
              to="/board"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              게시판
            </Link>
            <Link
              to="/study"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              스터디 & 모각AI
            </Link>
            <Link
              to="/share"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              자료공유
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t border-border">
              {user ? (
                <>
                  <Button variant="ghost" asChild onClick={() => setMobileMenuOpen(false)}>
                    <Link to="/mypage">마이페이지</Link>
                  </Button>
                  <Button 
                    variant="ghost" 
                    onClick={handleSignOut}
                    className="flex items-center gap-2 justify-center"
                  >
                    <LogOut className="h-4 w-4" />
                    로그아웃
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" asChild onClick={() => setMobileMenuOpen(false)}>
                    <Link to="/login">로그인</Link>
                  </Button>
                  <Button asChild style={{ background: "var(--gradient-primary)" }} className="text-white" onClick={() => setMobileMenuOpen(false)}>
                    <Link to="/signup">회원가입</Link>
                  </Button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

import { NavigationData } from "@/lib/types";
import TopBar from "./TopBar";
import NavMenu from "./NavMenu";

interface HeaderProps {
  navigation: NavigationData;
}

export default function Header({ navigation }: HeaderProps) {
  return (
    <header
      className="sticky top-0 z-30 border-b border-white/10 text-white shadow-sm"
      style={{
        background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))",
      }}
    >
      <TopBar
        message={navigation.topBar.message}
        links={navigation.topBar.links}
      />
      <NavMenu navigation={navigation} />
    </header>
  );
}

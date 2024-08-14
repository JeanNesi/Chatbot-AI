import { useTheme } from "next-themes";
import { Switch } from "./ui";
import { Sun, Moon, OpenAiLogo } from "@phosphor-icons/react/dist/ssr";

export const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <header className="py-4 px-6 border-b-2 flex justify-between">
      <div className="flex gap-2">
        <OpenAiLogo size={24} />
        <h1 className="font-bold">ChatBot</h1>
      </div>

      <div className="flex items-center gap-2">
        <Sun />

        <Switch
          checked={resolvedTheme === "dark"}
          onClick={() => {
            setTheme(resolvedTheme === "dark" ? "light" : "dark");
          }}
        />
        <Moon />
      </div>
    </header>
  );
};

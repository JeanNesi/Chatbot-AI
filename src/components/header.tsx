import { useTheme } from "next-themes";
import { Switch } from "./ui";
import { Sun, Moon } from "@phosphor-icons/react/dist/ssr";

export const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <header className="py-4 px-6 border-b-2 flex justify-between">
      <h1 className="font-bold">ChatBot</h1>

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

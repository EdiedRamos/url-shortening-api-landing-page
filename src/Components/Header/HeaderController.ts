import { useEffect, useRef, useState } from "react";

export const HeaderController = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const targetRef = useRef<HTMLDivElement>(null);

  const handleShow = () => setShowMenu((prev) => !prev);

  useEffect(() => {
    const handleOutside = (event: MouseEvent) => {
      if (
        targetRef.current &&
        !targetRef.current.contains(event.target as Node)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);

    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  return { showMenu, handleShow, targetRef };
};

import Stories from "./Stories";
import SideBar from "./SideBar";
import Posts from "./Posts";

export default function Corpo() {
  return (
    <div class="corpo">
      <div class="esquerda">
        <Stories />
        <Posts />
      </div>
      <SideBar />
    </div>
  );
}

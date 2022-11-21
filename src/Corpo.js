import Stories from "./Stories";
import SideBar from "./SideBar";

export default function Corpo() {
  return (
    <div class="corpo">
      <div class="esquerda">
        <Stories />
      </div>
      <SideBar />
    </div>
  );
}

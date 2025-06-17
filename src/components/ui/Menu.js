import Link from "next/link";

export default function Menu({data}) {
  const headerMenu = data;
  return (
    <div className="header-section-menu">
      {headerMenu.map((i,index) => (
        <Link key={index} className="header-section-menu-link" href={`${i.url}`}>{i.title}</Link>
      ))}
    </div>
  );
}

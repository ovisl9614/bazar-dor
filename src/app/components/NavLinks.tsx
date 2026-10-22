import Link from "next/link";

type Category = {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
};

const NavLinks = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories"
  );

  if (!res.ok) {
    throw new Error("Categories fetch failed");
  }

  const navs: Category[] = await res.json();

  return (
    <div className="flex gap-5 justify-center mt-5">
      {navs.map((n) => (
        <Link key={n.id} href={`/${n.slug}`}>
          {n.icon} {n.nameBn}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
function CtaPain() {
  return (
    <div className="bg-colorBrandWhiteYellow100light col-span-4 border-colorBrandPink500dark text-colorBrandGray800dark  flex h-fit  flex-col items-center justify-start rounded-tr-[100px] rounded-b-[24px] rounded-tl-[24px] border-4 p-8 text-center leading-none shadow-2xl lg:items-center lg:justify-center lg:text-center">
      <p className="text-textsizebrandh1 text-colorBrandPurple500light font-black">
        אם
      </p>
      <p className="text-textsizebrandh3 font-black">הלקוח לא</p>
      <p className="text-textsizebrandh4 inline-flex items-center justify-center gap-2 whitespace-nowrap font-black">
        מבין תוך
        <span className="text-textsizebrandh1 overflow-hidden text-colorBrandPurple500light inline-flex flex-col">
          <span className="first inline-block">1</span>
          <span className="text-colorBrandPink500dark text-textsizebrandp">
            שניות
          </span>
        </span>
        מה אתם
      </p>
      <p className="text-textsizebrandh2 font-black">מציעים</p>
      <p className="text-textsizebrandh1 text-colorBrandRed400light whitespace-nowrap font-black">
        איבדתם אותו
      </p>
    </div>
  );
}

export default CtaPain;

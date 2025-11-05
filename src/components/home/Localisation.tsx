const Commentaires = () => {
  return (
    <section className="text-gray-700 body-font w-full min-h-[500px]">
      {/* === Google Maps en arrière-plan === */}
      <div className="inset-0">
        <iframe
          title="map"
          width="100%"
          height="100%"
          src="https://www.google.com/maps?q=Belle+Souvenir,+Sambava,+Madagascar&hl=fr&z=16&output=embed"
          style={{ filter: "grayscale(0.1) contrast(1) opacity(0.9)" }}
          className="w-full h-[700px] border-0"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Commentaires;

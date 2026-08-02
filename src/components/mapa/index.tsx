export default function Mapa(){
    return (
        <div className="flex flex-col 2-full items-center justify-center py-8 bg-[#6271CF] gap-4">
            <h1 className="text-[150%] font-extrabold text-white">Nossa localização:</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.1338761036895!2d-43.374324324934115!3d-21.775079080067616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989ba1c18d2a97%3A0xacf1ee467831259e!2sInstituto%20de%20Ci%C3%AAncias%20Exatas%20-%20ICE%20-%20UFJF!5e0!3m2!1spt-BR!2sbr!4v1785695010623!5m2!1spt-BR!2sbr" 
            width="700" 
            height="550" 
            className="rounded-lg"
            allowFullScreen loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
        </div>
    )
}
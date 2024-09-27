import { 
    Roboto, 
    Playfair_Display, 
    Montserrat, 
    Lora, 
    Poppins, 
    Open_Sans, 
    Lato 
  } from 'next/font/google';
  
  const roboto_init = Roboto({ subsets: ['latin'], weight: ['100', '300', '700'], variable: '--font-roboto' });
  const playfair_display_init = Playfair_Display({ subsets: ['latin'], weight: ['600'], variable: '--font-playfair_display' });
  const montserrat_init = Montserrat({ subsets: ['latin'], weight: ['100', '400', '700'], variable: '--font-montserrat' });
  const lora_init = Lora({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-lora' });
  const poppins_init = Poppins({ subsets: ['latin'], weight: ['100', '400', '600', '700'], variable: '--font-poppins' });
  const open_sans_init = Open_Sans({ subsets: ['latin'], weight: ['300', '400', '600', '700'], variable: '--font-open_sans' });
  const lato_init = Lato({ subsets: ['latin'], weight: ['100', '300', '400', '700'], variable: '--font-lato' });
  
  export const roboto = roboto_init.variable;
  export const playfair_display = playfair_display_init.variable;
  export const montserrat = montserrat_init.variable;
  export const lora = lora_init.variable;
  export const poppins = poppins_init.variable;
  export const open_sans = open_sans_init.variable;
  export const lato = lato_init.variable;
  
import"./main-DOJO5Kqm.js";const{createApp:r}=Vue;r({data(){return{questions:[{text:"Qual é seu objetivo principal ao investir?",options:[{text:"Preservar meu patrimônio com segurança",value:"conservador"},{text:"Crescimento moderado com riscos controlados",value:"moderado"},{text:"Maximizar retornos, aceitando riscos maiores",value:"agressivo"}]},{text:"Por quanto tempo pretende manter seus investimentos?",options:[{text:"Menos de 2 anos",value:"conservador"},{text:"Entre 2 e 5 anos",value:"moderado"},{text:"Mais de 5 anos",value:"agressivo"}]},{text:"Como você reage a perdas temporárias?",options:[{text:"Não aceito perdas",value:"conservador"},{text:"Aceito pequenas oscilações",value:"moderado"},{text:"Entendo que são naturais do mercado",value:"agressivo"}]}],answers:[],profile:null,profileDescription:""}},methods:{async calculateProfile(){if(this.answers.length<this.questions.length){alert("Por favor, responda todas as questões");return}const s=this.answers.reduce((e,o)=>(e[o]=(e[o]||0)+1,e),{}),t=Object.entries(s).sort((e,o)=>o[1]-e[1])[0][0];this.profile=t.charAt(0).toUpperCase()+t.slice(1)}}}).mount("#app");

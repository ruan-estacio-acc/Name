import { useLayoutEffect, useRef } from 'react';

import { FooterContainer, FooterCtaBar, FooterTitle, FooterWrapper, FooterForm,FooterContentContainer, CtaSpacer, GlobalSpacer} from './Footer.styles';
import { Input } from './components/Input/Input.jsx';
import { Buttom } from './components/Buttom/Buttom.jsx';
import { Card, CardsGrid } from './components/Card/Card.jsx';

export const Footer = () => {
    const gridRef = useRef(null);
    const gapRef = useRef(null);

    const setGridAndGapRef = (el) => {
        gridRef.current = el;
        gapRef.current = el;
    };

        // Função para deixar o gap entre cards responsivo:
        useLayoutEffect(() => {
            if(!gapRef.current) return;
    
            const updateGap = () => {
                const width = window.innerWidth;
                const gap = Math.min(Math.max(width * 0.05, 32), 113.5);
                gapRef.current.style.gap = `${gap}px`;
            };
    
            updateGap();
    
            window.addEventListener('resize', updateGap);
    
            return () => {
                window.removeEventListener('resize', updateGap);
            };
    
        }, []);


// ((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((())))))))))))))))))))
    const ctaRef = useRef(null);
    const spacerRef = useRef(null);
    const preSpacerRef = useRef(null);
    const innerTopRef = useRef(null);
    // const active = true;

    // Hook personalizado para ajustar a altura do espaçador
    function useAbsoluteCtaSpacer (ctaRef, spacerRef, preSpacerRef, innerTopRef) {
        // if (!active) return;
        useLayoutEffect(() => {
            if (!ctaRef.current || !spacerRef.current) return;

            const update = () => {
                const height = ctaRef.current.offsetHeight;
                const half = `${height/2}px`;
                spacerRef.current.style.height = half;
                if (preSpacerRef && preSpacerRef.current) preSpacerRef.current.style.height = half;
                if (innerTopRef && innerTopRef.current) innerTopRef.current.style.height = half;
                if (typeof document !== 'undefined' && document.documentElement) {
                    document.documentElement.style.setProperty('--cta-half', half);
                }
            }

            update();

            const observer = new ResizeObserver(update);
            observer.observe(ctaRef.current);

            return () => observer.disconnect();
        })
    }

    useAbsoluteCtaSpacer(ctaRef, spacerRef, preSpacerRef, innerTopRef);

// (((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((())))))))))))))))))))
    // MARGIN UPDATE (NÃO NECESSÁRIA)
    // useLayoutEffect(() => {
    //     const updateMargin = () => {
    //         if (!gridRef.current) return;

    //         const width = window.innerWidth;
    //         let margin = Math.min(Math.max(width * 0.01, 20), 30);

    //         if (width <= 768) {
    //             margin += 50;
    //         }    
            
            
    //         gridRef.current.style.marginTop = `${margin}px`
    //     };

    //     updateMargin();


    //     window.addEventListener('resize', updateMargin);

    //     return () => {
    //         window.removeEventListener('resize', updateMargin);
    //     };
    // }, []);

// ((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((())))))))))))))))))))    
    // removed centerOverLine and related refs/effect


// ((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((())))))))))))))))))))    
    

    return (
        <>  
        

            <FooterContainer>
                
            <GlobalSpacer aria-hidden="true"/>
               
                            
                            <FooterWrapper>
                            <div  style={{position: "relative", width: "100%", maxWidth: "1440px", height: "100%", backgroundColor: "#1215daff", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", paddingTop: "0", boxSizing: "border-box", paddingInline: "clamp(24px, 4vw, 96px)"}}>
                                <div ref={innerTopRef} aria-hidden="true" style={{width: "100%", pointerEvents: "none"}} />
                                <CtaSpacer ref={spacerRef} aria-hidden="true" />
                                    
                                    <FooterCtaBar ref={ctaRef}>
                                        <FooterTitle>STAY UPTO DATE ABOUT OUR LATEST OFFERS</FooterTitle>                                    
                                            <FooterForm>                                   
                                            <Input />
                                            <Buttom>Subscribe</Buttom>
                                        </FooterForm>
                                    </FooterCtaBar>
                                    <CardsGrid ref={setGridAndGapRef} >
                                        <Card 
                                            variant="wide"
                                            title="SHOP.CO"
                                            social={["F", "T", "I", "L"]}
                                        >
                                            We have clothes that suits your style and which you're proud to wear. From women to men.
                                        </Card>
                                        <Card 
                                            title="COmpany"
                                            lines={[
                                                "About",
                                                "Features",
                                                "Works",
                                                "Career"
                                            ]}
                                        />
                                        <Card 
                                            title="Help"
                                            lines={[
                                                "Customer support",
                                                "Delivery details",
                                                "Terms & Conditions",
                                                "Privacy Policy"
                                            ]}
                                        />
                                        <Card 
                                            title="F A Q"
                                            lines={[
                                                "Account",
                                                "Manage Deliveries",
                                                "Orders",
                                                "Payments"
                                            ]}
                                        />
                                        <Card 
                                            title="Resourses"
                                            lines={[
                                                "Free eBooks",
                                                "Development Tutorial",
                                                "How to - Blog",
                                                "Youtube Playlist"
                                            ]}
                                        />
                                    </CardsGrid>

                                    <div style={{width: "100%", height: "1px", backgroundColor: "rgba(0, 0, 0, 0.1)", marginTop: "50px"}} />

                                    <div style={{marginTop: "25px", color: "#000", fontFamily: "Satoshi", fontSize: "14px", fontWeight: 400, lineHeight: "22px", alignSelf: "flex-start"}}>
                                        Shop.co © 2000-2023, All Rights Reserved
                                    </div>
                            </div>
                                
                            </FooterWrapper>
                        
                
               
            </FooterContainer>

            
        </>
    )
}
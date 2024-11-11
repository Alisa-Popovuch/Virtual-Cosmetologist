gsap.from('.photo', {x:-450, opacity:0, duration:3, delay:1})
gsap.from('h2', {x:450, opacity:0, duration:3, delay:1})
gsap.to('.first', {
    text: 'I need help, I have dry skin and frequent irritations, I need to choose the right care, but I don’t know what will suit me.',
    duration:7,
    delay:2,
    ease:'power.in',
    opacity:1
})
gsap.to('.second', {
    text: 'Have you heard about a virtual cosmetologist? With his help, I was finally able to choose the ideal care for myself!',
    duration:7,
    delay:9,
    ease:'power.in',
    opacity:1
})
gsap.to('.btn-slice', {y:-50, opacity:1, duration:4, delay:11.5, ease:"bounce"})
gsap.to('.text', {opacity:1, delay:16, duration:2})
gsap.to('.education', {opacity:1, delay:17, duration:2})
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const button = document.querySelector(".btn-slice");
const text = document.querySelector(".text");
const question = document.querySelector("h3");
const buttonYes = document.querySelector("#yes");
const buttonNo = document.querySelector("#no");
const answer = document.querySelector("#answer");
const creamContainer = document.querySelector(".cream-container");
const creamImg = document.querySelector("#cream");
const creamText = document.querySelector("#careCream");
const creamPrice = document.querySelector("#priceCream");
const cleaningContainer = document.querySelector(".cleaning-container");
const cleaningImg = document.querySelector("#cleaning");
const cleaningText = document.querySelector("#careCleaning");
const cleaningPrice = document.querySelector("#priceCleaning");
const tonerContainer = document.querySelector(".toner-container");
const tonerImg = document.querySelector("#toner");
const tonerText = document.querySelector("#careToner");
const tonerPrice = document.querySelector("#priceToner");
const serumContainer = document.querySelector(".serum-container");
const serumImg = document.querySelector("#serum");
const serumText = document.querySelector("#careSerum");
const serumPrice = document.querySelector("#priceSerum");
const maskContainer = document.querySelector(".mask-container");
const maskImg = document.querySelector("#mask");
const maskText = document.querySelector("#careMask");
const maskPrice = document.querySelector("#priceMask");
const spfContainer = document.querySelector(".spf-container");
const spfImg = document.querySelector("#spf");
const spfText = document.querySelector("#careSPF");
const spfPrice = document.querySelector("#priceSPF");
const message = document.querySelector("h4");
const form = document.querySelector("form");
const skinCareData = {
    normalSkin18: {
        cream: {
            src: "./assets/cream18NS.jpg",
            text: "Christina Delicate Hydrating Day Treatment + Vitamin E, 250 ml",
            price: "32$"
        }, 
        cleaning: {
            src: "./assets/cleaning18NS.jpg",
            text: "Comfort Zone Essential Face Wash, 150 ml",
            price: "61$"
        },
        toner: {
            src: "./assets/toner18NS.jpg",
            text: "Christina Fresh Purifying Toner, 300 ml",
            price: "34$"
        },
        serum: {
            src: "./assets/serum18NS.jpg",
            text: "Esthetic House Formula Ampoule Gold Snail 90%, 80 ml",
            price: "14$"
        }, 
        mask: {
            src: "./assets/mask18NS.jpg",
            text: "Dr.Hedison Real Mugwort Heating Claу Pack, 265 g",
            price: "33$"
        }, 
        spf: {
            src: "./assets/spf26DS.webp",
            text: "Gigi Sun Care Daily Protector SPF 30, 75 ml",
            price: "72$"
        }
    },
    normalSkin26: {
        cream: {
            src: "./assets/cream26NS.jpg",
            text: "Phytorelax Laboratories Lux Lift Argan Illuminating Face Cream Early Wrinkles, 50 ml",
            price: "17$"
        }, 
        cleaning: {
            src: "./assets/cleaning26NS.jpg",
            text: "ONmacabim System Plus Cleanser Foam Anti-Aging, 150 ml",
            price: "28$"
        },
        toner: {
            src: "./assets/toner8NS.webp",
            text: "ONmacabim NR Lotion Toner, 250 ml",
            price: "25$"
        },
        serum: {
            src: "./assets/serum26NS.webp",
            text: "Phytorelax Laboratories Lux Lift Argan Multi-Active Serum, 30 ml",
            price: "23$"
        }, 
        mask: {
            src: "./assets/mask26NS.jpg",
            text: "Holy Land Cosmetics Renew Formula Renewing Mask, 50 ml",
            price: "42$"
        }, 
        spf: {
            src: "./assets/spf26NS.jpg",
            text: "SkinClinic Hydro-Nourishing SPF30 Color Clair, 50 ml",
            price: "49$"
        }
    },
    normalSkin36: {
        cream: {
            src: "./assets/cream36NS.jpg",
            text: "Soskin Moisturizing Anti-ageing Cream, 50 ml",
            price: "47$"
        }, 
        cleaning: {
            src: "./assets/cleaning36NS.jpg",
            text: "Christina Wish Facial Wash, 300 ml",
            price: "32$"
        },
        toner: {
            src: "./assets/toner36NS.jpg",
            text: "Soskin Glyco-C Pigment-Wrinkle Corrective Care, 50 ml",
            price: "46$"
        },
        serum: {
            src: "./assets/serum36NS.webp",
            text: "Phytorelax Laboratories Bio Concentrated Active Facial Serum Glycolift, 30 ml",
            price: "21$"
        }, 
        mask: {
            src: "./assets/mask36NS.jpg",
            text: "Christina Сhateau de Beaute Vino Glory Mask Step 4B, 250 ml",
            price: "63$"
        }, 
        spf: {
            src: "./assets/spf26NS.jpg",
            text: "SkinClinic Hydro-Nourishing SPF30 Color Clair, 50 ml",
            price: "49$"
        }
    },
    normalSkin50: {
        cream: {
            src: "./assets/cream50NS.jpg",
            text: "31% Ella Bache Magistral Cream Matrilex, 50 ml",
            price: "34$"
        }, 
        cleaning: {
            src: "./assets/toner36DS.jpg",
            text: "Keenwell Aquasphera (day cream, 80 ml + serum, 50 ml + mask-cream for the skin around the eyes, 20 ml)",
            price: "92$"
        },
        toner: {
            src: "./assets/toner50NS.jpg",
            text: "Christina Illustrious Micellar Water Step 1, 300 ml",
            price: "29$"
        },
        serum: {
            src: "./assets/serum50NS.jpg",
            text: "Christina Wish Rejuvenating Serum, 30 ml",
            price: "59$"
        }, 
        mask: {
            src: "./assets/mask50NS.jpg",
            text: "Diego Dalla Palma Revivyl Resurface2 Soothing Rebalancing Mask, 250 ml",
            price: "30$"
        }, 
        spf: {
            src: "./assets/spf26NS.jpg",
            text: "SkinClinic Hydro-Nourishing SPF30 Color Clair, 50 ml",
            price: "49$"
        }
    },
    combinationSkin18: {
        cream: {
            src: "./assets/cream18SC.webp",
            text: "Dr.Hedison AHA 10% Scaling Cream, 50 ml",
            price: "48$"
        }, 
        cleaning: {
            src: "./assets/cleaning18CS.webp",
            text: "Clarena Hyaluron 3D Line Hyaluron 3D Peeling, 100 ml",
            price: "19$"
        },
        toner: {
            src: "./assets/toner18SC.webp",
            text: "Comfort Zone Active Pureness Toner, 200 ml",
            price: "55$"
        },
        serum: {
            src: "./assets/serum18SC.jpg",
            text: "Bielenda Professional Face Program Normalizing Face Serum, 30 ml",
            price: "14$"
        }, 
        mask: {
            src: "./assets/mask18OS.webp",
            text: "Christina Sea Herbal Beauty Mask Green Apple, 60 ml",
            price: "18$"
        }, 
        spf: {
            src: "./assets/spf18SC.jpg",
            text: "Farmona Professional Ideal Protect Moisturizing Protective Cream SPF50, 50 ml",
            price: "32$"
        }
    },
    combinationSkin26: {
        cream: {
            src: "./assets/cream26SC.webp",
            text: "Sothys Firming Youth Cream, 50 ml",
            price: "59$"
        }, 
        cleaning: {
            src: "./assets/cleaning26SC.jpg",
            text: "Institut Esthederm Osmoclean Pure Cleansing Foam, 150 ml",
            price: "39$"
        },
        toner: {
            src: "./assets/toner26SC.jpg",
            text: "Institut Esthederm Intensive Propolis+, 130 ml",
            price: "58$"
        },
        serum: {
            src: "./assets/serum26SC.jpg",
            text: "Institut Esthederm Intensive AHA Peel, 30 ml",
            price: "60$"
        }, 
        mask: {
            src: "./assets/mask26SC.jpg",
            text: "Anna Lotan Barbados Soothing Mask, 75 ml",
            price: "43$"
        }, 
        spf: {
            src: "./assets/spf18SC.jpg",
            text: "Farmona Professional Ideal Protect Moisturizing Protective Cream SPF50, 50 ml",
            price: "35$"
        }
    }, 
    combinationSkin36: {
        cream: {
            src: "./assets/cream26SC.webp",
            text: "Sothys Firming Youth Cream, 50 ml",
            price: "72$"
        }, 
        cleaning: {
            src: "./assets/cleaning36SC.jpg",
            text: "Anna Lotan New Age Control Purifying Liquid Soap, 200 ml",
            price: "51$"
        },
        toner: {
            src: "./assets/toner36SC.jpg",
            text: "Christina Chateau de Beaute Vino Elixir Step 3, 100 ml",
            price: "99$"
        },
        serum: {
            src: "./assets/serum36SC.jpg",
            text: "Academie Aromatherapie Hydro-Matifying Fluid Provence Eucalyptus, 50 ml",
            price: "47$"
        }, 
        mask: {
            src: "./assets/mask36SC.jpg",
            text: "Holy Land Cosmetics ABR Complex Brightening Mask, 50 ml",
            price: "62$"
        }, 
        spf: {
            src: "./assets/spf18SC.jpg",
            text: "Farmona Professional Ideal Protect Moisturizing Protective Cream SPF50, 50 ml",
            price: "41$"
        }
    }, 
    combinationSkin50: {
        cream: {
            src: "./assets/cream50SC.jpg",
            text: "ONmacabim NR Moisturizing Cream Combination SPF 15, 50 ml",
            price: "33$"
        }, 
        cleaning: {
            src: "./assets/cleaning50SC.jpg",
            text: "Diego Dalla Palma Revivyl Resurface2 Anti Age Combined Acids Concentrate, 110 ml",
            price: "39$"
        },
        toner: {
            src: "./assets/toner50SC.jpg",
            text: "Christina Forever Young Absolute Contour Kit (serum Absolute, 30 ml + serum 3Luronic, 30 ml + cream Chin&Neck, 50 ml)",
            price: "159$"
        },
        serum: {
            src: "./assets/serum50SC.jpg",
            text: "Christina Forever Young Moisture Fusion Serum, 30 ml",
            price: "99$"
        }, 
        mask: {
            src: "./assets/mask50SC.jpg",
            text: "Gigi Nutri-Peptide Purifying Clay Mask, 50 ml",
            price: "69$"
        }, 
        spf: {
            src: "./assets/spf18SC.jpg",
            text: "Farmona Professional Ideal Protect Moisturizing Protective Cream SPF50, 50 ml",
            price: "34$"
        }
    },
    oilySkin18: {
        cream: {
            src: "./assets/cream18OS.jpg",
            text: "Clarena Liposome Pyruvic Acid Salicylic & Cream, 50 ml",
            price: "21$"
        }, 
        cleaning: {
            src: "./assets/cleaning18OS.webp",
            text: "Medik8 Surface Radiance Cleanse with AHA and BHA acids, 40 ml",
            price: "23$"
        },
        toner: {
            src: "./assets/toner18OS.jpg",
            text: "Facial toner Kaetana Vugri.net Problem skin, for oily skin, with propolis, 250 ml",
            price: "12$"
        },
        serum: {
            src: "./assets/serum18OS.jpg",
            text: "Elemis Clarifying Serum, 30 ml",
            price: "50$"
        }, 
        mask: {
            src: "./assets/mask18OS.webp",
            text: "Christina Sea Herbal Beauty Mask Green Apple, 60 ml",
            price: "17$"
        }, 
        spf: {
            src: "./assets/spf18OS.webp",
            text: "Obagi Medical Sun Shield Matte Broad Spectrum SPF 50, 85 g",
            price: "41$"
        }
    },
    oilySkin26: {
        cream: {
            src: "./assets/cream26OS.jpg",
            text: "Gigi Vitamin E Hydratant SPF 17, 50 ml",
            price: "82$"
        }, 
        cleaning: {
            src: "./assets/cleaning26OS.jpg",
            text: "Institut Esthederm Osmoclean Pure Cleansing Foam, 150 ml",
            price: "41$"
        },
        toner: {
            src: "./assets/toner26OS.jpg",
            text: "Bruno Vassari Glyco System Dual-Phase Toner, 200 ml",
            price: "22$"
        },
        serum: {
            src: "./assets/serum26OS.jpg",
            text: "Institut Esthederm Intensive AHA Peel, 30 ml",
            price: "53$"
        }, 
        mask: {
            src: "./assets/mask26OS.jpg",
            text: "Anna Lotan Barbados Soothing Mask, 75 ml",
            price: "42$"
        }, 
        spf: {
            src: "./assets/spf18OS.webp",
            text: "Obagi Medical Sun Shield Matte Broad Spectrum SPF 50, 85 g",
            price: "42$"
        }
    },
    oilySkin36: {
        cream: {
            src: "./assets/cream36OS.jpg",
            text: "Image Skincare Ageless Total Repair Creme, 56.7 g",
            price: "57$"
        }, 
        cleaning: {
            src: "./assets/cleaning36OS.jpg",
            text: "Diego Dalla Palma Revivyl Resurface2 Anti Age Combined Acids Concentrate, 110 ml",
            price: "44$"
        },
        toner: {
            src: "./assets/toner26OS.jpg",
            text: "Bruno Vassari Glyco System Dual-Phase Toner, 200 ml",
            price: "24$"
        },
        serum: {
            src: "./assets/serum36OS.webp",
            text: "Phytorelax Laboratories Bio Concentrated Active Facial Serum Glycolift, 30 ml",
            price: "28$"
        }, 
        mask: {
            src: "./assets/mask36OS.jpg",
            text: "Image Skincare Ageless Total Overnight Retinol Masque, 48 g",
            price: "100$"
        }, 
        spf: {
            src: "./assets/spf18OS.webp",
            text: "Obagi Medical Sun Shield Matte Broad Spectrum SPF 50, 85 g",
            price: "54$"
        }
    },
    oilySkin50: {
        cream: {
            src: "./assets/cream50OS.jpg",
            text: "Image Skincare Ageless Total Retinol-A Creme, 57 g",
            price: "98$"
        }, 
        cleaning: {
            src: "./assets/cleaning50OS.jpg",
            text: "Diego Dalla Palma Revivyl Resurface2 Preparatory Lotion, 300 ml",
            price: "30$"
        },
        toner: {
            src: "./assets/toner26OS.jpg",
            text: "Bruno Vassari Glyco System Dual-Phase Toner, 200 ml",
            price: "21$"
        },
        serum: {
            src: "./assets/serum50OS.jpg",
            text: "Phytorelax Laboratories Bio Concentrated Active Facial Serum, 30 ml",
            price: "24$"
        }, 
        mask: {
            src: "./assets/mask50OS.jpg",
            text: "Diego Dalla Palma Revivyl Resurface2 Soothing Rebalancing Mask, 250 ml",
            price: "29$"
        }, 
        spf: {
            src: "./assets/spf18OS.webp",
            text: "Obagi Medical Sun Shield Matte Broad Spectrum SPF 50, 85 g",
            price: "42$"
        }
    },
    drySkin18: {
        cream: {
            src: "./assets/cream18DS.jpg",
            text: "Christina Trans dermal Cream with Liposomes, 60 ml",
            price: "35$"
        }, 
        cleaning: {
            src: "./assets/cleaning18DS.jpg",
            text: "Babor Phyto HY-OL Booster Hydrating, 100 ml",
            price: "31$"
        },
        toner: {
            src: "./assets/toner18DS.jpg",
            text: "Academie Hypo-Sensible Toner, 200 ml",
            price: "40$"
        },
        serum: {
            src: "./assets/serum18DS.jpg",
            text: "Phytorelax Laboratories Bio Phytorelax Hydro Avena Concentrated Face Serum, 30 ml",
            price: "17$"
        }, 
        mask: {
            src: "./assets/mask18DS.jpg",
            text: "Christina Sea Herbal Beauty Mask Vanilla, 60 ml",
            price: "15$"
        }, 
        spf: {
            src: "./assets/spf18DS.jpg",
            text: "Bielenda Professional Supremelab Barrier Renew Day Cream SPF 30, 50 ml",
            price: "23$"
        }
    },
    drySkin26: {
        cream: {
            src: "./assets/cream26DS.jpg",
            text: "Phytorelax Laboratories Lux Lift Argan Illuminating Face Cream Early Wrinkles, 50 ml",
            price: "20$"
        }, 
        cleaning: {
            src: "./assets/cleaning26DS.webp",
            text: "Janssen Cosmetics Dry Skin Hydro Active Gel, 50 ml",
            price: "35$"
        },
        toner: {
            src: "./assets/toner26DS.webp",
            text: "ONmacabim NR Lotion Toner, 250 ml",
            price: "34$"
        },
        serum: {
            src: "./assets/serum26DS.webp",
            text: "Phytorelax Laboratories Lux Lift Argan Multi-Active Serum, 30 ml",
            price: "19$"
        }, 
        mask: {
            src: "./assets/mask26DS.jpg",
            text: "Comfort Zone Renight Mask, 60 ml",
            price: "55$"
        }, 
        spf: {
            src: "./assets/spf26DS.webp",
            text: "Gigi Sun Care Daily Protector SPF 30, 75 ml",
            price: "60$"
        }
    },
    drySkin36: {
        cream: {
            src: "./assets/cream36DS.jpg",
            text: "Soskin Moisturizing Anti-ageing Cream, 50 ml",
            price: "49$"
        }, 
        cleaning: {
            src: "./assets/cleaning36DS.jpg",
            text: "Circadia Vitamin Veil Cleanser Anti-ageing, 236 ml",
            price: "59$"
        },
        toner: {
            src: "./assets/toner36DS.jpg",
            text: "Keenwell Aquasphera (day cream, 80 ml + serum, 50 ml + mask-cream for the skin around the eyes, 20 ml)",
            price: "73$"
        },
        serum: {
            src: "./assets/serum36DS.jpg",
            text: "Alcina Moisturising Serum, 30 ml",
            price: "30$"
        }, 
        mask: {
            src: "./assets/mask36DS.jpg",
            text: "Image Skincare Ageless Total Resurfacing Masque, 57 g",
            price: "49$"
        }, 
        spf: {
            src: "./assets/spf36DS.webp",
            text: "Image Skincare MD Restoring Daily Defense Moisturizer SPF 50, 57 g",
            price: "70$"
        }
    },
    drySkin50: {
        cream: {
            src: "./assets/cream50DS.jpg",
            text: "Utsukusy Sirtuina's Cream, 50 ml",
            price: "36$"
        }, 
        cleaning: {
            src: "./assets/cleaning50DS.webp",
            text: "Babor Doctor Babor Refine Cellular AHA 10+10 Peeling Gel, 50 ml",
            price: "53$"
        },
        toner: {
            src: "./assets/toner50DS.jpg",
            text: "Farmona Professional Retin Gold Lifting & Illuminating Eye Cream, 50 ml",
            price: "16$"
        },
        serum: {
            src: "./assets/serum50DS.jpg",
            text: "Utsukusy Sirtuina's Serum, 35 ml",
            price: "32$"
        }, 
        mask: {
            src: "./assets/mask50DS.jpg",
            text: "ONmacabim NR Nourishing Skin Mask, 50 ml",
            price: "42$"
        }, 
        spf: {
            src: "./assets/spf36DS.webp",
            text: "Image Skincare MD Restoring Daily Defense Moisturizer SPF 50, 57 g",
            price: "62$"
        }
    }
}
function skin(data) {
    creamImg.setAttribute("src", data.cream.src);
    creamText.textContent = data.cream.text;
    creamPrice.textContent = data.cream.price;

    cleaningImg.setAttribute("src", data.cleaning.src);
    cleaningText.textContent = data.cleaning.text;
    cleaningPrice.textContent = data.cleaning.price;

    tonerImg.setAttribute("src", data.toner.src);
    tonerText.textContent = data.toner.text;
    tonerPrice.textContent = data.toner.price;

    serumImg.setAttribute("src", data.serum.src);
    serumText.textContent = data.serum.text;
    serumPrice.textContent = data.serum.price;

    maskImg.setAttribute("src", data.mask.src);
    maskText.textContent = data.mask.text;
    maskPrice.textContent = data.mask.price;

    spfImg.setAttribute("src", data.spf.src);
    spfText.textContent = data.spf.text;
    spfPrice.textContent = data.spf.price;
}

button.addEventListener("click", cosmetologCall);

function cosmetologCall() {
    first.style = "display:none";
    second.style = "display:none";
    button.style = "display:none";
    text.style = "display:none";
    question.style = "display:block";
    buttonYes.style = "display:block";
    buttonNo.style = "display:block";
    answer.style = "display:block";
    question.textContent = "Do you have dry skin type?";
    buttonYes.textContent = "Yes";
    buttonNo.textContent = "No";
    answer.textContent = "Dry skin is skin that does not produce enough sebum, is dull, rough, tight and more sensitive to external factors, in particular wind and frost. In dry skin, the process of keratinization and exfoliation of the upper layer of the epidermis is disrupted. People with this skin type often experience dry flakes, discomfort after washing and the need to apply cream after drying. Rashes rarely appear on it, and the sebaceous glands (pores) are narrowed.";
    buttonYes.addEventListener("click", drySkin);
    buttonNo.addEventListener("click", cosmetologCallSecond);
}
function drySkin() {
    question.textContent = "Is your skin sensitive?";
    answer.style = "display:none";
    buttonYes.removeEventListener("click", drySkin);
    buttonNo.removeEventListener("click", cosmetologCallSecond);
    buttonYes.addEventListener("click", drySkinSecond);
    buttonNo.addEventListener("click", drySkinSecond);
}
function drySkinSecond() {
    question.textContent = "Do you have problems with the skin under your eyes (wrinkles, puffiness, dryness, dark circles, etc.)?";
    buttonYes.removeEventListener("click", drySkinSecond);
    buttonNo.removeEventListener("click", drySkinSecond);
    buttonYes.addEventListener("click", drySkinThird);
    buttonNo.addEventListener("click", drySkinThird);
}
function drySkinThird() {
    question.textContent = "Is your age category 18 – 25 years old?";
    buttonYes.removeEventListener("click", drySkinThird);
    buttonNo.removeEventListener("click", drySkinThird);
    buttonYes.addEventListener("click", () => {
        skin(skinCareData.drySkin18);
        creamContainer.style = "display:block";
        cleaningContainer.style = "display:block";
        tonerContainer.style = "display:block";
        serumContainer.style = "display:block";
        maskContainer.style = "display:block";
        spfContainer.style = "display:block";
        question.textContent = "We have selected the ideal care for your skin";
        buttonYes.style = "display:none";
        buttonNo.style = "disply:none";
        message.style = "display:block";
        form.style = "display:block";
    });
    buttonNo.addEventListener("click", drySkinFour);
}
function drySkinFour() {
    question.textContent = "Is your age category 26 – 35 years old?";
    buttonYes.removeEventListener("click", skin);
    buttonNo.removeEventListener("click", drySkinFour);
    buttonYes.addEventListener("click", () => {
        skin(skinCareData.drySkin26);
    });
    buttonNo.addEventListener("click", drySkinFive);
}
function drySkinFive() {
    question.textContent = "Is your age category 36 – 50 years old?";
    buttonYes.removeEventListener("click", skin);
    buttonNo.removeEventListener("click", drySkinFive);
    buttonYes.addEventListener("click", () => {
        skin(skinCareData.drySkin36);
    });
    buttonNo.addEventListener("click", drySkinSix);
}
function drySkinSix() {
    question.textContent = "Is your age category 50+?";
    buttonYes.removeEventListener("click", skin);
    buttonNo.removeEventListener("click", drySkinSix);
    buttonYes.addEventListener("click", () => {
        skin(skinCareData.drySkin50);
    });
    buttonNo.addEventListener("click", drySkinSeven);
}
function drySkinSeven() {
    question.textContent = "Please take the test first and indicate your age.";
    buttonYes.style = "display:none";
    buttonNo.style = "display:none";
    button.style = "display:block";
    button.removeEventListener("click", cosmetologCall);
    button.addEventListener("click", () => {
        location.reload();
    });
    
}

function cosmetologCallSecond() {
    question.textContent = "Do you have oily skin type?";
    buttonYes.textContent = "Yes";
    buttonNo.textContent = "No";
    answer.textContent = "Oily skin: the skin has a greasy shine, enlarged pores, and is prone to comedones and acne.";
    buttonYes.removeEventListener("click", skin);
    buttonNo.removeEventListener("click", drySkinSeven);
    buttonYes.addEventListener("click", oilySkin);
    buttonNo.addEventListener("click", cosmetologCallThird);
}
function oilySkin() {
    question.textContent = "Is your skin sensitive?";
    answer.style = "display:none";
    buttonYes.removeEventListener("click", oilySkin);
    buttonNo.removeEventListener("click", cosmetologCallThird);
    buttonYes.addEventListener("click", oilySkinSecond);
    buttonNo.addEventListener("click", oilySkinSecond);
}
function oilySkinSecond() {
    question.textContent = "Do you have problems with the skin under your eyes (wrinkles, puffiness, dryness, dark circles, etc.)?";
    buttonYes.removeEventListener("click", oilySkinSecond);
    buttonNo.removeEventListener("click", oilySkinSecond);
    buttonYes.addEventListener("click", oilySkinThird);
    buttonNo.addEventListener("click", oilySkinThird);
}
function oilySkinThird() {
    question.textContent = "Is your age category 18 – 25 years old?";
    buttonYes.removeEventListener("click", oilySkinThird);
    buttonNo.removeEventListener("click", oilySkinThird);
    buttonYes.addEventListener("click", () => {
        skin(skinCareData.oilySkin18);
        creamContainer.style = "display:block";
        cleaningContainer.style = "display:block";
        tonerContainer.style = "display:block";
        serumContainer.style = "display:block";
        maskContainer.style = "display:block";
        spfContainer.style = "display:block";
        question.textContent = "We have selected the ideal care for your skin";
        buttonYes.style = "display:none";
        buttonNo.style = "disply:none";
        message.style = "display:block";
        form.style = "display:block";
    });
    buttonNo.addEventListener("click", oilySkinFour);
}
function oilySkinFour() {
    question.textContent = "Is your age category 26 – 35 years old?";
    buttonYes.removeEventListener("click", skin);
    buttonNo.removeEventListener("click", oilySkinFour);
    buttonYes.addEventListener("click", () => {
        skin(skinCareData.oilySkin26);
    });
    buttonNo.addEventListener("click", oilySkinFive);
}
function oilySkinFive() {
    question.textContent = "Is your age category 36 – 50 years old?";
    buttonYes.removeEventListener("click", skin);
    buttonNo.removeEventListener("click", oilySkinFive);
    buttonYes.addEventListener("click", () => {
        skin(skinCareData.oilySkin36);
    });
    buttonNo.addEventListener("click", oilySkinSix);
}
function oilySkinSix() {
    question.textContent = "Is your age category 50+?";
    buttonYes.removeEventListener("click", skin);
    buttonNo.removeEventListener("click", oilySkinSix);
    buttonYes.addEventListener("click", () => {
        skin(skinCareData.oilySkin36);
    });
    buttonNo.addEventListener("click", oilySkinSeven);
}
function oilySkinSeven() {
    question.textContent = "Please take the test first and indicate your age.";
    buttonYes.style = "display:none";
    buttonNo.style = "display:none";
    button.style = "display:block";
    button.removeEventListener("click", cosmetologCallSecond);
        button.addEventListener("click", () => {
        location.reload();
    });
}
function cosmetologCallThird() {
    question.textContent = "Do you have combination skin?";
    buttonYes.textContent = "Yes";
    buttonNo.textContent = "No";
    answer.textContent = "Combination skin is called because it is a combination of two types: normal or dry and oily, problematic. Combination skin is shiny and prone to small blemishes, especially in the T-zone between the forehead, nose and chin. At the same time, in the cheek area the skin shows signs of normal or dry.";
    buttonYes.removeEventListener("click", skin);
    buttonNo.removeEventListener("click", oilySkinSeven);
    buttonYes.addEventListener("click", combinationSkin);
    buttonNo.addEventListener("click", cosmetologCallFour)
}
function combinationSkin() {
    question.textContent = "Is your skin sensitive?";
    answer.style = "display:none";
    buttonYes.removeEventListener("click", combinationSkin);
    buttonNo.removeEventListener("click", cosmetologCallFour);
    buttonYes.addEventListener("click", combinationSkinSecond);
    buttonNo.addEventListener("click", combinationSkinSecond);
}
function combinationSkinSecond() {
    question.textContent = "Do you have problems with the skin under your eyes (wrinkles, puffiness, dryness, dark circles, etc.)?";
    buttonYes.removeEventListener("click", combinationSkinSecond);
    buttonNo.removeEventListener("click", combinationSkinSecond);
    buttonYes.addEventListener("click", combinationSkinThird);
    buttonNo.addEventListener("click", combinationSkinThird);
}
function combinationSkinThird() {
    question.textContent = "Is your age category 18 – 25 years old?";
    buttonYes.removeEventListener("click", combinationSkinThird);
    buttonNo.removeEventListener("click", combinationSkinThird);
    buttonYes.addEventListener("click", () => {
        skin(skinCareData.combinationSkin18);
        creamContainer.style = "display:block";
        cleaningContainer.style = "display:block";
        tonerContainer.style = "display:block";
        serumContainer.style = "display:block";
        maskContainer.style = "display:block";
        spfContainer.style = "display:block";
        question.textContent = "We have selected the ideal care for your skin";
        buttonYes.style = "display:none";
        buttonNo.style = "disply:none";
        message.style = "display:block";
        form.style = "display:block";
    });
    buttonNo.addEventListener("click", combinationSkinFour);
}
function combinationSkinFour() {
    question.textContent = "Is your age category 26 – 35 years old?";
    buttonYes.removeEventListener("click", skin);
    buttonNo.removeEventListener("click", combinationSkinFour);
    buttonYes.addEventListener("click", () => {
        skin(skinCareData.combinationSkin26);
    });
    buttonNo.addEventListener("click", combinationSkinFive);
}
function combinationSkinFive() {
    question.textContent = "Is your age category 36 – 50 years old?";
    buttonYes.removeEventListener("click", skin);
    buttonNo.removeEventListener("click", combinationSkinFive);
    buttonYes.addEventListener("click", () => {
        skin(skinCareData.combinationSkin36);
    });
    buttonNo.addEventListener("click", combinationSkinSix);
}
function combinationSkinSix() {
    question.textContent = "Is your age category 50+?";
    buttonYes.removeEventListener("click", skin);
    buttonNo.removeEventListener("click", combinationSkinSix);
    buttonYes.addEventListener("click", () => {
        skin(skinCareData.combinationSkin50);
    });
    buttonNo.addEventListener("click", combinationSkinSeven);
}
function combinationSkinSeven() {
    question.textContent = "Please take the test first and indicate your age.";
    buttonYes.style = "display:none";
    buttonNo.style = "display:none";
    button.style = "display:block";
    button.removeEventListener("click", cosmetologCallThird);
        button.addEventListener("click", () => {
        location.reload();
    });
}
function cosmetologCallFour() {
    question.textContent = "Do you have a normal skin type?";
    buttonYes.textContent = "Yes";
    buttonNo.textContent = "No";
    answer.textContent = "Normal skin is one in which the T-zone (forehead, chin and nose) may be a little oily, but overall sebum and moisture production is balanced and the skin is neither too oily nor too dry. Silky, soft and smooth texture is a sign of healthy and glowing skin.";
    buttonYes.removeEventListener("click", skin);
    buttonNo.removeEventListener("click", combinationSkinSeven);
    buttonYes.addEventListener("click", normalSkin);
    buttonNo.addEventListener("click", cosmetologCallFive)
}
function normalSkin() {
    question.textContent = "Is your skin sensitive?";
    answer.style = "display:none";
    buttonYes.removeEventListener("click", normalSkin);
    buttonNo.removeEventListener("click", cosmetologCallFive);
    buttonYes.addEventListener("click", normalSkinSecond);
    buttonNo.addEventListener("click", normalSkinSecond);
}
function normalSkinSecond() {
    question.textContent = "Do you have problems with the skin under your eyes (wrinkles, puffiness, dryness, dark circles, etc.)?";
    buttonYes.removeEventListener("click", normalSkinSecond);
    buttonNo.removeEventListener("click", normalSkinSecond);
    buttonYes.addEventListener("click", normalSkinThird);
    buttonNo.addEventListener("click", normalSkinThird);
}
function normalSkinThird() {
    question.textContent = "Is your age category 18 – 25 years old?";
    buttonYes.removeEventListener("click", normalSkinThird);
    buttonNo.removeEventListener("click", normalSkinThird);
    buttonYes.addEventListener("click", () => {
        skin(skinCareData.normalSkin18);
        creamContainer.style = "display:block";
        cleaningContainer.style = "display:block";
        tonerContainer.style = "display:block";
        serumContainer.style = "display:block";
        maskContainer.style = "display:block";
        spfContainer.style = "display:block";
        question.textContent = "We have selected the ideal care for your skin";
        buttonYes.style = "display:none";
        buttonNo.style = "disply:none";
        message.style = "display:block";
        form.style = "display:block";
    });
    buttonNo.addEventListener("click", normalSkinFour);
}
function normalSkinFour() {
    question.textContent = "Is your age category 26 – 35 years old?";
    buttonYes.removeEventListener("click", skin);
    buttonNo.removeEventListener("click", normalSkinFour);
    buttonYes.addEventListener("click", () => {
        skin(skinCareData.normalSkin26);
    });
    buttonNo.addEventListener("click", normalSkinFive);
}
function normalSkinFive() {
    question.textContent = "Is your age category 36 – 50 years old?";
    buttonYes.removeEventListener("click", skin);
    buttonNo.removeEventListener("click", normalSkinFive);
    buttonYes.addEventListener("click", () => {
        skin(skinCareData.normalSkin36);
    });
    buttonNo.addEventListener("click", normalSkinSix);
}
function normalSkinSix() {
    question.textContent = "Is your age category 50+?";
    buttonYes.removeEventListener("click", skin);
    buttonNo.removeEventListener("click", normalSkinSix);
    buttonYes.addEventListener("click", () => {
        skin(skinCareData.normalSkin50);
    });
    buttonNo.addEventListener("click", normalSkinSeven);
}
function normalSkinSeven() {
    question.textContent = "Please take the test first and indicate your age.";
    buttonYes.style = "display:none";
    buttonNo.style = "display:none";
    button.style = "display:block";
    button.removeEventListener("click", cosmetologCallFour);
        button.addEventListener("click", () => {
        location.reload();
    });
}
function cosmetologCallFive() {
    question.textContent = "Please take the test first and indicate your facial skin type.";
    buttonYes.style = "display:none";
    buttonNo.style = "display:none";
    button.style = "display:block";
    answer.style = "display:none";
    button.removeEventListener("click", cosmetologCallFour);
        button.addEventListener("click", () => {
        location.reload();
    });
}






export const cardContactAnimated = {
    offscreen: {
        y: 400,
        opacity: 0
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "tween",
            bounce: 0.3,
            duration: 0.7
        }
    }
};

export const inputAnimated = {
    offscreen: {
        x: -300,
        opacity: 0
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "tween",
            bounce: 0.4,
            duration: 0.7
        }
    }
};

export const textIndexAnimated = {
    offscreen: {
        x: 200,
        opacity: 0
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            type: "tween",
            bounce: 0.4
        }
    }
};

export const languageBarAnimated = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.6,
            duration: 2
        }
    }

};

export const textLanguageAnimated = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 2
        }
    }
};

export const cardLanguageAnimated = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "tween",
            bounce: 0.6,
            duration: 0.5
        }
    }
};

export const cardProjectAnimated = {
    offscreen:{y:400,opacity:0},
    onscreen:{
        y:0,
        opacity:1,
        transition:{
            type: "tween",
            bounce: 0.5,
            duration: 0.5
        }
    }
}
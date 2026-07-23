export function buildSpectrumDashboard(){
    return {
        ROT:   FARB.ROT,
        GELB:  respo100().slice(0,10),
        GRUN:  respo360().slice(0,12),
        BLAU:  {
            percent: NATUR_MODE.percent(100),
            degree:  NATUR_MODE.degree(360),
            axis:    NATUR_MODE.axis(360)
        },
        STATUS: "AKTIV",
        LEVEL:  "100%"
    };
}

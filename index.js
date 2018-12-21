/**
 * @file   mofron-comp-divlink/index.js
 * @author simpart
 */
const mf      = require('mofron');
const Text    = require('mofron-comp-text');
const Click   = require('mofron-event-click');
const Hover   = require('mofron-event-hover');
const Border  = require('mofron-effect-border');
const efColor = require('mofron-effect-color');

mf.comp.SBText = class extends Text {
    
    /**
     * initialize component
     * 
     * @param po paramter or option
     */
    constructor (po) {
        try {
            super();
            this.name('SBText');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @npte private method
     */
    initDomConts () {
        try {
            super.initDomConts();
            
            let clk = (clk_cmp) => {
                try {
                    clk_cmp.weight(700);
                    clk_cmp.effect('Border').forcedExec(true);
                } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            }
            //let hvr = (hvr_cmp, hvr_flg) => {
            //    try {
            //        hvr_cmp.mainColor(
            //            (true === hvr_flg) ? hvr_cmp.mainColor()[0] : hvr_cmp.mainColor()[1]
            //        );
            //    } catch (e) {
            //        console.error(e.stack);
            //        throw e;
            //    }
            //}
            
            this.event([
                new Click(clk),
                new Hover({ kickEffect : new efColor([ [0,0,0], [0,0,0] ]) })
            ]);
            
            this.effect([
                new Border({
                    type    : 'left',
                    color   : [ 0, 0, 0 ],
                    width   : '0.03rem',
                    suspend : true
                })
            ]);
            this.style({
                'padding-left' : '0.1rem',
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    hoverColor (clr) {
        try {
            return this.effect('Color').color(
                clr,
                (undefined !== clr) ? this.mainColor() : undefined
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    accentColor (prm) {
        try {
            if (undefined !== prm) {
                this.hoverColor(prm);
            }
            return this.effect('Border').color(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.SBText;
/* end of file */

/* eslint-disable */
 
/*!
 * pixi-viewport - v4.38.0
 * Compiled Sun, 27 Nov 2022 13:43:58 UTC
 *
 * pixi-viewport is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 * 
 * Copyright 2019-2020, David Figatner, All Rights Reserved
 */
import { Point, Rectangle } from '@pixi/math';
import { Container } from '@pixi/display';
import { Ticker } from '@pixi/ticker';

/**
 * Derive this class to create user-defined plugins
 *
 * @public
 */
class Plugin
{
    /** The viewport to which this plugin is attached. */
    

    /**
     * Flags whether this plugin has been "paused".
     *
     * @see Plugin#pause
     * @see Plugin#resume
     */
    

    /** @param {Viewport} parent */
    constructor(parent)
    {
        this.parent = parent;
        this.paused = false;
    }

    /** Called when plugin is removed */
     destroy()
    {
        // Override for implementation
    }

    /** Handler for pointerdown PIXI event */
     down(_e)
    {
        return false;
    }

    /** Handler for pointermove PIXI event */
     move(_e)
    {
        return false;
    }

    /** Handler for pointerup PIXI event */
     up(_e)
    {
        return false;
    }

    /** Handler for wheel event on div */
     wheel(_e)
    {
        return false;
    }

    /**
     * Called on each tick
     * @param {number} elapsed time in millisecond since last update
     */
     update(_delta)
    {
        // Override for implementation
    }

    /** Called when the viewport is resized */
     resize()
    {
        // Override for implementation
    }

    /** Called when the viewport is manually moved */
     reset()
    {
        // Override for implementation
    }

    /** Pause the plugin */
     pause()
    {
        this.paused = true;
    }

    /** Un-pause the plugin */
     resume()
    {
        this.paused = false;
    }
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var penner = createCommonjsModule(function (module, exports) {
/*
	Copyright © 2001 Robert Penner
	All rights reserved.

	Redistribution and use in source and binary forms, with or without modification, 
	are permitted provided that the following conditions are met:

	Redistributions of source code must retain the above copyright notice, this list of 
	conditions and the following disclaimer.
	Redistributions in binary form must reproduce the above copyright notice, this list 
	of conditions and the following disclaimer in the documentation and/or other materials 
	provided with the distribution.

	Neither the name of the author nor the names of contributors may be used to endorse 
	or promote products derived from this software without specific prior written permission.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
	EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
	MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
	COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
	GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
	AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
	NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
	OF THE POSSIBILITY OF SUCH DAMAGE.
 */

(function() {
  var penner, umd;

  umd = function(factory) {
    {
      return module.exports = factory;
    }
  };

  penner = {
    linear: function(t, b, c, d) {
      return c * t / d + b;
    },
    easeInQuad: function(t, b, c, d) {
      return c * (t /= d) * t + b;
    },
    easeOutQuad: function(t, b, c, d) {
      return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function(t, b, c, d) {
      if ((t /= d / 2) < 1) {
        return c / 2 * t * t + b;
      } else {
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
      }
    },
    easeInCubic: function(t, b, c, d) {
      return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function(t, b, c, d) {
      return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function(t, b, c, d) {
      if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t + b;
      } else {
        return c / 2 * ((t -= 2) * t * t + 2) + b;
      }
    },
    easeInQuart: function(t, b, c, d) {
      return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function(t, b, c, d) {
      return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function(t, b, c, d) {
      if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t * t + b;
      } else {
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
      }
    },
    easeInQuint: function(t, b, c, d) {
      return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function(t, b, c, d) {
      return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function(t, b, c, d) {
      if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t * t * t + b;
      } else {
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
      }
    },
    easeInSine: function(t, b, c, d) {
      return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function(t, b, c, d) {
      return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function(t, b, c, d) {
      return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function(t, b, c, d) {
      if (t === 0) {
        return b;
      } else {
        return c * Math.pow(2, 10 * (t / d - 1)) + b;
      }
    },
    easeOutExpo: function(t, b, c, d) {
      if (t === d) {
        return b + c;
      } else {
        return c * (-Math.pow(2, -10 * t / d) + 1) + b;
      }
    },
    easeInOutExpo: function(t, b, c, d) {
      if ((t /= d / 2) < 1) {
        return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
      } else {
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
      }
    },
    easeInCirc: function(t, b, c, d) {
      return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function(t, b, c, d) {
      return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function(t, b, c, d) {
      if ((t /= d / 2) < 1) {
        return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
      } else {
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
      }
    },
    easeInElastic: function(t, b, c, d) {
      var a, p, s;
      s = 1.70158;
      p = 0;
      a = c;
      if (t === 0) ; else if ((t /= d) === 1) ;
      if (!p) {
        p = d * .3;
      }
      if (a < Math.abs(c)) {
        a = c;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(c / a);
      }
      return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function(t, b, c, d) {
      var a, p, s;
      s = 1.70158;
      p = 0;
      a = c;
      if (t === 0) ; else if ((t /= d) === 1) ;
      if (!p) {
        p = d * .3;
      }
      if (a < Math.abs(c)) {
        a = c;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(c / a);
      }
      return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function(t, b, c, d) {
      var a, p, s;
      s = 1.70158;
      p = 0;
      a = c;
      if (t === 0) ; else if ((t /= d / 2) === 2) ;
      if (!p) {
        p = d * (.3 * 1.5);
      }
      if (a < Math.abs(c)) {
        a = c;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(c / a);
      }
      if (t < 1) {
        return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
      } else {
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
      }
    },
    easeInBack: function(t, b, c, d, s) {
      if (s === void 0) {
        s = 1.70158;
      }
      return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function(t, b, c, d, s) {
      if (s === void 0) {
        s = 1.70158;
      }
      return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function(t, b, c, d, s) {
      if (s === void 0) {
        s = 1.70158;
      }
      if ((t /= d / 2) < 1) {
        return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
      } else {
        return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
      }
    },
    easeInBounce: function(t, b, c, d) {
      var v;
      v = penner.easeOutBounce(d - t, 0, c, d);
      return c - v + b;
    },
    easeOutBounce: function(t, b, c, d) {
      if ((t /= d) < 1 / 2.75) {
        return c * (7.5625 * t * t) + b;
      } else if (t < 2 / 2.75) {
        return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
      } else if (t < 2.5 / 2.75) {
        return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
      } else {
        return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
      }
    },
    easeInOutBounce: function(t, b, c, d) {
      var v;
      if (t < d / 2) {
        v = penner.easeInBounce(t * 2, 0, c, d);
        return v * .5 + b;
      } else {
        v = penner.easeOutBounce(t * 2 - d, 0, c, d);
        return v * .5 + c * .5 + b;
      }
    }
  };

  umd(penner);

}).call(commonjsGlobal);
});

// eslint-disable-next-line

/**
 * Returns correct Penner equation using string or Function.
 *
 * @internal
 * @ignore
 * @param {(function|string)} [ease]
 * @param {defaults} default penner equation to use if none is provided
 */
// eslint-disable-next-line consistent-return
function ease(ease, defaults)
{
    if (!ease)
    {
        return penner[defaults];
    }
    else if (typeof ease === 'function')
    {
        return ease;
    }
    else if (typeof ease === 'string')
    {
        return penner[ease];
    }
}

/** Options for {@link Animate}. */









































const DEFAULT_ANIMATE_OPTIONS = {
    removeOnInterrupt: false,
    ease: 'linear',
    time: 1000,
};

/**
 * Animation plugin.
 *
 * @see Viewport#animate
 * @fires animate-end
 */
class Animate extends Plugin
{
    

    /** The starting x-coordinate of the viewport. */
    

    /** The starting y-coordinate of the viewport. */
    

    /** The change in the x-coordinate of the viewport through the animation.*/
    

    /** The change in the y-coordinate of the viewport through the animation. */
    

    /** Marks whether the center of the viewport is preserved in the animation. */
    

    /** The starting viewport width. */
     __init() {this.startWidth = null;}

    /** The starting viewport height. */
     __init2() {this.startHeight = null;}

    /** The change in the viewport's width through the animation. */
     __init3() {this.deltaWidth = null;}

    /** The change in the viewport's height through the animation. */
     __init4() {this.deltaHeight = null;}

    /** The viewport's width post-animation. */
     __init5() {this.width = null;}

    /** The viewport's height post-animation. */
     __init6() {this.height = null;}

    /** The time since the animation started. */
     __init7() {this.time = 0;}

    /**
     * This is called by {@link Viewport.animate}.
     *
     * @param parent
     * @param options
     */
    constructor(parent, options = {})
    {
        super(parent);Animate.prototype.__init.call(this);Animate.prototype.__init2.call(this);Animate.prototype.__init3.call(this);Animate.prototype.__init4.call(this);Animate.prototype.__init5.call(this);Animate.prototype.__init6.call(this);Animate.prototype.__init7.call(this);
        this.options = Object.assign({}, DEFAULT_ANIMATE_OPTIONS, options);
        this.options.ease = ease(this.options.ease);

        this.setupPosition();
        this.setupZoom();

        this.time = 0;
    }

    /**
     * Setup `startX`, `startY`, `deltaX`, `deltaY`, `keepCenter`.
     *
     * This is called during construction.
     */
     setupPosition()
    {
        if (typeof this.options.position !== 'undefined')
        {
            this.startX = this.parent.center.x;
            this.startY = this.parent.center.y;
            this.deltaX = this.options.position.x - this.parent.center.x;
            this.deltaY = this.options.position.y - this.parent.center.y;
            this.keepCenter = false;
        }
        else
        {
            this.keepCenter = true;
        }
    }

    /**
     * Setup `startWidth, `startHeight`, `deltaWidth, `deltaHeight, `width`, `height`.
     *
     * This is called during construction.
     */
     setupZoom()
    {
        this.width = null;
        this.height = null;

        if (typeof this.options.scale !== 'undefined')
        {
            this.width = this.parent.screenWidth / this.options.scale;
        }
        else if (typeof this.options.scaleX !== 'undefined' || typeof this.options.scaleY !== 'undefined')
        {
            if (typeof this.options.scaleX !== 'undefined')
            {
                // screenSizeInWorldPixels = screenWidth / scale
                this.width = this.parent.screenWidth / this.options.scaleX;
            }
            if (typeof this.options.scaleY !== 'undefined')
            {
                this.height = this.parent.screenHeight / this.options.scaleY;
            }
        }
        else
        {
            if (typeof this.options.width !== 'undefined')
            {
                this.width = this.options.width;
            }
            if (typeof this.options.height !== 'undefined')
            {
                this.height = this.options.height;
            }
        }

        if (this.width !== null)
        {
            this.startWidth = this.parent.screenWidthInWorldPixels;
            this.deltaWidth = this.width - this.startWidth;
        }
        if (this.height !== null)
        {
            this.startHeight = this.parent.screenHeightInWorldPixels;
            this.deltaHeight = this.height - this.startHeight;
        }
    }

     down()
    {
        if (this.options.removeOnInterrupt)
        {
            this.parent.plugins.remove('animate');
        }

        return false;
    }

     complete()
    {
        this.parent.plugins.remove('animate');
        if (this.width !== null)
        {
            this.parent.fitWidth(this.width, this.keepCenter, this.height === null);
        }
        if (this.height !== null)
        {
            this.parent.fitHeight(this.height, this.keepCenter, this.width === null);
        }
        if (!this.keepCenter && this.options.position)
        {
            this.parent.moveCenter(this.options.position);
        }

        this.parent.emit('animate-end', this.parent);

        if (this.options.callbackOnComplete)
        {
            this.options.callbackOnComplete(this.parent);
        }
    }

     update(elapsed)
    {
        if (this.paused)
        {
            return;
        }
        this.time += elapsed;

        const originalZoom = new Point(this.parent.scale.x, this.parent.scale.y);

        if (this.time >= this.options.time)
        {
            const originalWidth = this.parent.width;
            const originalHeight = this.parent.height;

            this.complete();
            if (originalWidth !== this.parent.width || originalHeight !== this.parent.height)
            {
                this.parent.emit('zoomed', { viewport: this.parent, original: originalZoom, type: 'animate' });
            }
        }
        else
        {
            const percent = this.options.ease(this.time, 0, 1, this.options.time);

            if (this.width !== null)
            {
                const startWidth = this.startWidth ;
                const deltaWidth = this.deltaWidth ;

                this.parent.fitWidth(
                    startWidth + (deltaWidth * percent),
                    this.keepCenter,
                    this.height === null);
            }
            if (this.height !== null)
            {
                const startHeight = this.startHeight ;
                const deltaHeight = this.deltaHeight ;

                this.parent.fitHeight(
                    startHeight + (deltaHeight * percent),
                    this.keepCenter,
                    this.width === null);
            }
            if (this.width === null)
            {
                this.parent.scale.x = this.parent.scale.y;
            }
            else if (this.height === null)
            {
                this.parent.scale.y = this.parent.scale.x;
            }
            if (!this.keepCenter)
            {
                const startX = this.startX ;
                const startY = this.startY ;
                const deltaX = this.deltaX ;
                const deltaY = this.deltaY ;
                const original = new Point(this.parent.x, this.parent.y);

                this.parent.moveCenter(startX + (deltaX * percent), startY + (deltaY * percent));
                this.parent.emit('moved', { viewport: this.parent, original, type: 'animate' });
            }
            if (this.width || this.height)
            {
                this.parent.emit('zoomed', { viewport: this.parent, original: originalZoom, type: 'animate' });
            }
        }
    }
}

function _optionalChain$1(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }





/** Options for {@link Bounce}. */









































const DEFAULT_BOUNCE_OPTIONS = {
    sides: 'all',
    friction: 0.5,
    time: 150,
    ease: 'easeInOutSine',
    underflow: 'center',
    bounceBox: null
};

/**
 * @fires bounce-start-x
 * @fires bounce.end-x
 * @fires bounce-start-y
 * @fires bounce-end-y
 * @public
 */
class Bounce extends Plugin
{
    /** The options passed to initialize this plugin, cannot be modified again. */
    

    /** Holds whether to bounce from left side. */
    

    /** Holds whether to bounce from top side. */
    

    /** Holds whether to bounce from right side. */
    

    /** Holds whether to bounce from bottom side. */
    

    /** Direction of underflow along x-axis. */
    

    /** Direction of underflow along y-axis. */
    

    /** Easing */
    

    /** Bounce state along x-axis */
    

    /** Bounce state along y-axis */
    

    /**
     * This is called by {@link Viewport.bounce}.
     */
    constructor(parent, options = {})
    {
        super(parent);

        this.options = Object.assign({}, DEFAULT_BOUNCE_OPTIONS, options);
        this.ease = ease(this.options.ease, 'easeInOutSine');

        if (this.options.sides)
        {
            if (this.options.sides === 'all')
            {
                this.top = this.bottom = this.left = this.right = true;
            }
            else if (this.options.sides === 'horizontal')
            {
                this.right = this.left = true;
                this.top = this.bottom = false;
            }
            else if (this.options.sides === 'vertical')
            {
                this.left = this.right = false;
                this.top = this.bottom = true;
            }
            else
            {
                this.top = this.options.sides.indexOf('top') !== -1;
                this.bottom = this.options.sides.indexOf('bottom') !== -1;
                this.left = this.options.sides.indexOf('left') !== -1;
                this.right = this.options.sides.indexOf('right') !== -1;
            }
        }
        else
        {
            this.left = this.top = this.right = this.bottom = false;
        }

        const clamp = this.options.underflow.toLowerCase();

        if (clamp === 'center')
        {
            this.underflowX = 0;
            this.underflowY = 0;
        }
        else
        {
            // eslint-disable-next-line no-nested-ternary
            this.underflowX = (clamp.indexOf('left') !== -1) ? -1 : (clamp.indexOf('right') !== -1) ? 1 : 0;
            // eslint-disable-next-line no-nested-ternary
            this.underflowY = (clamp.indexOf('top') !== -1) ? -1 : (clamp.indexOf('bottom') !== -1) ? 1 : 0;
        }

        this.reset();
    }

     isActive()
    {
        return this.toX !== null || this.toY !== null;
    }

     down()
    {
        this.toX = this.toY = null;

        return false;
    }

     up()
    {
        this.bounce();

        return false;
    }

     update(elapsed)
    {
        if (this.paused)
        {
            return;
        }

        this.bounce();

        if (this.toX)
        {
            const toX = this.toX;

            toX.time += elapsed;
            this.parent.emit('moved', { viewport: this.parent, type: 'bounce-x' });

            if (toX.time >= this.options.time)
            {
                this.parent.x = toX.end;
                this.toX = null;
                this.parent.emit('bounce-x-end', this.parent);
            }
            else
            {
                this.parent.x = this.ease(toX.time, toX.start, toX.delta, this.options.time);
            }
        }

        if (this.toY)
        {
            const toY = this.toY;

            toY.time += elapsed;
            this.parent.emit('moved', { viewport: this.parent, type: 'bounce-y' });

            if (toY.time >= this.options.time)
            {
                this.parent.y = toY.end;
                this.toY = null;
                this.parent.emit('bounce-y-end', this.parent);
            }
            else
            {
                this.parent.y = this.ease(toY.time, toY.start, toY.delta, this.options.time);
            }
        }
    }

    /** @internal */
     calcUnderflowX()
    {
        let x;

        switch (this.underflowX)
        {
            case -1:
                x = 0;
                break;
            case 1:
                x = (this.parent.screenWidth - this.parent.screenWorldWidth);
                break;
            default:
                x = (this.parent.screenWidth - this.parent.screenWorldWidth) / 2;
        }

        return x;
    }

    /** @internal */
     calcUnderflowY()
    {
        let y;

        switch (this.underflowY)
        {
            case -1:
                y = 0;
                break;
            case 1:
                y = (this.parent.screenHeight - this.parent.screenWorldHeight);
                break;
            default:
                y = (this.parent.screenHeight - this.parent.screenWorldHeight) / 2;
        }

        return y;
    }

     oob()
    {
        const box = this.options.bounceBox;

        if (box)
        {
            const x1 = typeof box.x === 'undefined' ? 0 : box.x;
            const y1 = typeof box.y === 'undefined' ? 0 : box.y;
            const width = typeof box.width === 'undefined' ? this.parent.worldWidth : box.width;
            const height = typeof box.height === 'undefined' ? this.parent.worldHeight : box.height;

            return {
                left: this.parent.left < x1,
                right: this.parent.right > width,
                top: this.parent.top < y1,
                bottom: this.parent.bottom > height,
                topLeft: new Point(
                    x1 * this.parent.scale.x,
                    y1 * this.parent.scale.y
                ),
                bottomRight: new Point(
                    (width * this.parent.scale.x) - this.parent.screenWidth,
                    (height * this.parent.scale.y) - this.parent.screenHeight
                )
            };
        }

        return {
            left: this.parent.left < 0,
            right: this.parent.right > this.parent.worldWidth,
            top: this.parent.top < 0,
            bottom: this.parent.bottom > this.parent.worldHeight,
            topLeft: new Point(0, 0),
            bottomRight: new Point(
                (this.parent.worldWidth * this.parent.scale.x) - this.parent.screenWidth,
                (this.parent.worldHeight * this.parent.scale.y) - this.parent.screenHeight
            )
        };
    }

     bounce()
    {
        if (this.paused)
        {
            return;
        }

        let oob;
        let decelerate





 = this.parent.plugins.get('decelerate', true) ;

        if (decelerate && (decelerate.x || decelerate.y))
        {
            if ((decelerate.x && decelerate.percentChangeX === _optionalChain$1([decelerate, 'access', _ => _.options, 'optionalAccess', _2 => _2.friction]))
            || (decelerate.y && decelerate.percentChangeY === _optionalChain$1([decelerate, 'access', _3 => _3.options, 'optionalAccess', _4 => _4.friction])))
            {
                oob = this.oob();
                if ((oob.left && this.left) || (oob.right && this.right))
                {
                    decelerate.percentChangeX = this.options.friction;
                }
                if ((oob.top && this.top) || (oob.bottom && this.bottom))
                {
                    decelerate.percentChangeY = this.options.friction;
                }
            }
        }
        const drag = this.parent.plugins.get('drag', true) || {};
        const pinch = this.parent.plugins.get('pinch', true) || {};

        decelerate = decelerate || {};

        if (!_optionalChain$1([drag, 'optionalAccess', _5 => _5.active]) && !_optionalChain$1([pinch, 'optionalAccess', _6 => _6.active]) && ((!this.toX || !this.toY) && (!decelerate.x || !decelerate.y)))
        {
            oob = oob || this.oob();
            const topLeft = oob.topLeft;
            const bottomRight = oob.bottomRight;

            if (!this.toX && !decelerate.x)
            {
                let x = null;

                if (oob.left && this.left)
                {
                    x = (this.parent.screenWorldWidth < this.parent.screenWidth) ? this.calcUnderflowX() : -topLeft.x;
                }
                else if (oob.right && this.right)
                {
                    x = (this.parent.screenWorldWidth < this.parent.screenWidth) ? this.calcUnderflowX() : -bottomRight.x;
                }
                if (x !== null && this.parent.x !== x)
                {
                    this.toX = { time: 0, start: this.parent.x, delta: x - this.parent.x, end: x };
                    this.parent.emit('bounce-x-start', this.parent);
                }
            }
            if (!this.toY && !decelerate.y)
            {
                let y = null;

                if (oob.top && this.top)
                {
                    y = (this.parent.screenWorldHeight < this.parent.screenHeight) ? this.calcUnderflowY() : -topLeft.y;
                }
                else if (oob.bottom && this.bottom)
                {
                    y = (this.parent.screenWorldHeight < this.parent.screenHeight) ? this.calcUnderflowY() : -bottomRight.y;
                }
                if (y !== null && this.parent.y !== y)
                {
                    this.toY = { time: 0, start: this.parent.y, delta: y - this.parent.y, end: y };
                    this.parent.emit('bounce-y-start', this.parent);
                }
            }
        }
    }

     reset()
    {
        this.toX = this.toY = null;
        this.bounce();
    }
}

/**
 * There are three ways to clamp:
 * 1. direction: 'all' = the world is clamped to its world boundaries, ie, you cannot drag any part of the world offscreen
 *    direction: 'x' | 'y' = only the x or y direction is clamped to its world boundary
 * 2. left, right, top, bottom = true | number = the world is clamped to the world's pixel location for each side;
 *    if any of these are set to true, then the location is set to the boundary [0, viewport.worldWidth/viewport.worldHeight]
 *    eg: to allow the world to be completely dragged offscreen, set
 *    [-viewport.worldWidth, -viewport.worldHeight, viewport.worldWidth * 2, viewport.worldHeight * 2]
 *
 * Underflow determines what happens when the world is smaller than the viewport
 * 1. none = the world is clamped but there is no special behavior
 * 2. center = the world is centered on the viewport
 * 3. combination of top/bottom/center and left/right/center (case insensitive) =
 *    the world is stuck to the appropriate boundaries
 *
 */













































const DEFAULT_CLAMP_OPTIONS = {
    left: false,
    right: false,
    top: false,
    bottom: false,
    direction: null,
    underflow: 'center'
};

/**
 * Plugin to clamp the viewport to a specific world bounding box.
 *
 * @public
 */
class Clamp extends Plugin
{
    /** Options used to initialize this plugin, cannot be modified later. */
    

    /** Last state of viewport */
    






    
    
    

    /**
     * This is called by {@link Viewport.clamp}.
     */
    constructor(parent, options  = {})
    {
        super(parent);
        this.options = Object.assign({}, DEFAULT_CLAMP_OPTIONS, options);

        if (this.options.direction)
        {
            this.options.left = this.options.direction === 'x' || this.options.direction === 'all' ? true : null;
            this.options.right = this.options.direction === 'x' || this.options.direction === 'all' ? true : null;
            this.options.top = this.options.direction === 'y' || this.options.direction === 'all' ? true : null;
            this.options.bottom = this.options.direction === 'y' || this.options.direction === 'all' ? true : null;
        }

        this.parseUnderflow();
        this.last = { x: null, y: null, scaleX: null, scaleY: null };
        this.update();
    }

     parseUnderflow()
    {
        const clamp = this.options.underflow.toLowerCase();

        if (clamp === 'none')
        {
            this.noUnderflow = true;
        }
        else if (clamp === 'center')
        {
            this.underflowX = this.underflowY = 0;
            this.noUnderflow = false;
        }
        else
        {
            // eslint-disable-next-line no-nested-ternary
            this.underflowX = (clamp.indexOf('left') !== -1) ? -1 : (clamp.indexOf('right') !== -1) ? 1 : 0;
            // eslint-disable-next-line no-nested-ternary
            this.underflowY = (clamp.indexOf('top') !== -1) ? -1 : (clamp.indexOf('bottom') !== -1) ? 1 : 0;
            this.noUnderflow = false;
        }
    }

     move()
    {
        this.update();

        return false;
    }

     update()
    {
        if (this.paused)
        {
            return;
        }

        // only clamp on change
        if (this.parent.x === this.last.x
            && this.parent.y === this.last.y
            && this.parent.scale.x === this.last.scaleX
            && this.parent.scale.y === this.last.scaleY)
        {
            return;
        }
        const original = { x: this.parent.x, y: this.parent.y };
        // TODO: Fix
        const decelerate = (this.parent.plugins ).decelerate || {};

        if (this.options.left !== null || this.options.right !== null)
        {
            let moved = false;

            if (!this.noUnderflow && this.parent.screenWorldWidth < this.parent.screenWidth)
            {
                switch (this.underflowX)
                {
                    case -1:
                        if (this.parent.x !== 0)
                        {
                            this.parent.x = 0;
                            moved = true;
                        }
                        break;
                    case 1:
                        if (this.parent.x !== this.parent.screenWidth - this.parent.screenWorldWidth)
                        {
                            this.parent.x = this.parent.screenWidth - this.parent.screenWorldWidth;
                            moved = true;
                        }
                        break;
                    default:
                        if (this.parent.x !== (this.parent.screenWidth - this.parent.screenWorldWidth) / 2)
                        {
                            this.parent.x = (this.parent.screenWidth - this.parent.screenWorldWidth) / 2;
                            moved = true;
                        }
                }
            }
            else
            {
                if (this.options.left !== null)
                {
                    if (this.parent.left < (this.options.left === true ? 0 : this.options.left))
                    {
                        this.parent.x = -(this.options.left === true ? 0 : this.options.left) * this.parent.scale.x;
                        decelerate.x = 0;
                        moved = true;
                    }
                }
                if (this.options.right !== null)
                {
                    if (this.parent.right > (this.options.right === true ? this.parent.worldWidth : this.options.right))
                    {
                        this.parent.x = (-(this.options.right === true ? this.parent.worldWidth : this.options.right)
                            * this.parent.scale.x) + this.parent.screenWidth;
                        decelerate.x = 0;
                        moved = true;
                    }
                }
            }
            if (moved)
            {
                this.parent.emit('moved', { viewport: this.parent, original, type: 'clamp-x' });
            }
        }
        if (this.options.top !== null || this.options.bottom !== null)
        {
            let moved = false;

            if (!this.noUnderflow && this.parent.screenWorldHeight < this.parent.screenHeight)
            {
                switch (this.underflowY)
                {
                    case -1:
                        if (this.parent.y !== 0)
                        {
                            this.parent.y = 0;
                            moved = true;
                        }
                        break;
                    case 1:
                        if (this.parent.y !== this.parent.screenHeight - this.parent.screenWorldHeight)
                        {
                            this.parent.y = (this.parent.screenHeight - this.parent.screenWorldHeight);
                            moved = true;
                        }
                        break;
                    default:
                        if (this.parent.y !== (this.parent.screenHeight - this.parent.screenWorldHeight) / 2)
                        {
                            this.parent.y = (this.parent.screenHeight - this.parent.screenWorldHeight) / 2;
                            moved = true;
                        }
                }
            }
            else
            {
                if (this.options.top !== null)
                {
                    if (this.parent.top < (this.options.top === true ? 0 : this.options.top))
                    {
                        this.parent.y = -(this.options.top === true ? 0 : this.options.top)
                            * this.parent.scale.y;
                        decelerate.y = 0;
                        moved = true;
                    }
                }
                if (this.options.bottom !== null)
                {
                    if (this.parent.bottom > (this.options.bottom === true ? this.parent.worldHeight : this.options.bottom))
                    {
                        this.parent.y = (-(this.options.bottom === true ? this.parent.worldHeight : this.options.bottom)
                            * this.parent.scale.y) + this.parent.screenHeight;
                        decelerate.y = 0;
                        moved = true;
                    }
                }
            }
            if (moved)
            {
                this.parent.emit('moved', { viewport: this.parent, original, type: 'clamp-y' });
            }
        }
        this.last.x = this.parent.x;
        this.last.y = this.parent.y;
        this.last.scaleX = this.parent.scale.x;
        this.last.scaleY = this.parent.scale.y;
    }

     reset()
    {
        this.update();
    }
}

/**
 * Options for {@link ClampZoom}.
 *
 * Use either minimum width/height or minimum scale
 */





















const DEFAULT_CLAMP_ZOOM_OPTIONS = {
    minWidth: null,
    minHeight: null,
    maxWidth: null,
    maxHeight: null,
    minScale: null,
    maxScale: null
};

/**
 * Plugin to clamp the viewport's zoom to a specific range.
 *
 * @public
 */
class ClampZoom extends Plugin
{
    

    /**
     * This is called by {@link Viewport.clampZoom}.
     */
    constructor(parent, options = {})
    {
        super(parent);
        this.options = Object.assign({}, DEFAULT_CLAMP_ZOOM_OPTIONS, options);

        this.clamp();
    }

     resize()
    {
        this.clamp();
    }

    /** Clamp the viewport scale zoom) */
     clamp()
    {
        if (this.paused)
        {
            return;
        }

        if (this.options.minWidth || this.options.minHeight || this.options.maxWidth || this.options.maxHeight)
        {
            let width = this.parent.worldScreenWidth;
            let height = this.parent.worldScreenHeight;

            if (this.options.minWidth !== null && width < this.options.minWidth)
            {
                const original = this.parent.scale.x;

                this.parent.fitWidth(this.options.minWidth, false, false, true);
                this.parent.scale.y *= this.parent.scale.x / original;
                width = this.parent.worldScreenWidth;
                height = this.parent.worldScreenHeight;
                this.parent.emit('zoomed', { viewport: this.parent, type: 'clamp-zoom' });
            }
            if (this.options.maxWidth !== null && width > this.options.maxWidth)
            {
                const original = this.parent.scale.x;

                this.parent.fitWidth(this.options.maxWidth, false, false, true);
                this.parent.scale.y *= this.parent.scale.x / original;
                width = this.parent.worldScreenWidth;
                height = this.parent.worldScreenHeight;
                this.parent.emit('zoomed', { viewport: this.parent, type: 'clamp-zoom' });
            }
            if (this.options.minHeight !== null && height < this.options.minHeight)
            {
                const original = this.parent.scale.y;

                this.parent.fitHeight(this.options.minHeight, false, false, true);
                this.parent.scale.x *= this.parent.scale.y / original;
                width = this.parent.worldScreenWidth;
                height = this.parent.worldScreenHeight;
                this.parent.emit('zoomed', { viewport: this.parent, type: 'clamp-zoom' });
            }
            if (this.options.maxHeight !== null && height > this.options.maxHeight)
            {
                const original = this.parent.scale.y;

                this.parent.fitHeight(this.options.maxHeight, false, false, true);
                this.parent.scale.x *= this.parent.scale.y / original;
                this.parent.emit('zoomed', { viewport: this.parent, type: 'clamp-zoom' });
            }
        }
        else
        if (this.options.minScale || this.options.maxScale)
        {
            const minScale = { x: null, y: null };
            const maxScale = { x: null, y: null };

            if (typeof this.options.minScale === 'number')
            {
                minScale.x = this.options.minScale;
                minScale.y = this.options.minScale;
            }
            else if (this.options.minScale !== null)
            {
                const optsMinScale = this.options.minScale ;

                minScale.x = typeof optsMinScale.x === 'undefined' ? null : optsMinScale.x;
                minScale.y = typeof optsMinScale.y === 'undefined' ? null : optsMinScale.y;
            }

            if (typeof this.options.maxScale === 'number')
            {
                maxScale.x = this.options.maxScale;
                maxScale.y = this.options.maxScale;
            }
            else if (this.options.maxScale !== null)
            {
                const optsMaxScale = this.options.maxScale ;

                maxScale.x = typeof optsMaxScale.x === 'undefined' ? null : optsMaxScale.x;
                maxScale.y = typeof optsMaxScale.y === 'undefined' ? null : optsMaxScale.y;
            }

            let scaleX = this.parent.scale.x;
            let scaleY = this.parent.scale.y;

            if (minScale.x !== null && scaleX < minScale.x)
            {
                scaleX = minScale.x;
            }
            if (maxScale.x !== null && scaleX > maxScale.x)
            {
                scaleX = maxScale.x;
            }
            if (minScale.y !== null && scaleY < minScale.y)
            {
                scaleY = minScale.y;
            }
            if (maxScale.y !== null && scaleY > maxScale.y)
            {
                scaleY = maxScale.y;
            }
            if (scaleX !== this.parent.scale.x || scaleY !== this.parent.scale.y)
            {
                this.parent.scale.set(scaleX, scaleY);
                this.parent.emit('zoomed', { viewport: this.parent, type: 'clamp-zoom' });
            }
        }
    }

     reset()
    {
        this.clamp();
    }
}

/** This allows independent x and y values for min/maxScale */

const DEFAULT_DECELERATE_OPTIONS = {
    friction: 0.98,
    bounce: 0.8,
    minSpeed: 0.01
};

/**
 * Time period of decay (1 frame)
 *
 * @internal
 * @ignore
 */
const TP = 16;

/**
 * Plugin to decelerate viewport velocity smoothly after panning ends.
 *
 * @public
 */
class Decelerate extends Plugin
{
    /** Options used to initialize this plugin. */
    

    /**
     * x-component of the velocity of viewport provided by this plugin, at the current time.
     *
     * This is measured in px/frame, where a frame is normalized to 16 milliseconds.
     */
    

    /**
     * y-component of the velocity of the viewport provided by this plugin, at the current time.
     *
     * This is measured in px/frame, where a frame is normalized to 16 milliseconds.
     */
    

    /**
     * The decay factor for the x-component of the viewport.
     *
     * The viewport's velocity decreased by this amount each 16 milliseconds.
     */
    

    /**
     * The decay factor for the y-component of the viewport.
     *
     * The viewport's velocity decreased by this amount each 16 milliseconds.
     */
    

    /** Saved list of recent viewport position snapshots, to estimate velocity. */
    

    /** The time since the user released panning of the viewport. */
    

    /**
     * This is called by {@link Viewport.decelerate}.
     */
    constructor(parent, options = {})
    {
        super(parent);

        this.options = Object.assign({}, DEFAULT_DECELERATE_OPTIONS, options);
        this.saved = [];
        this.timeSinceRelease = 0;

        this.reset();
        this.parent.on('moved', (data) => this.moved(data));
    }

     down()
    {
        this.saved = [];
        this.x = this.y = null;

        return false;
    }

     isActive()
    {
        return !!(this.x || this.y);
    }

     move()
    {
        if (this.paused)
        {
            return false;
        }

        const count = this.parent.input.count();

        if (count === 1 || (count > 1 && !this.parent.plugins.get('pinch', true)))
        {
            this.saved.push({ x: this.parent.x, y: this.parent.y, time: performance.now() });

            if (this.saved.length > 60)
            {
                this.saved.splice(0, 30);
            }
        }

        // Silently recording viewport positions
        return false;
    }

    /** Listener to viewport's "moved" event. */
     moved(data)
    {
        if (this.saved.length)
        {
            const last = this.saved[this.saved.length - 1];

            if (data.type === 'clamp-x')
            {
                if (last.x === data.original.x)
                {
                    last.x = this.parent.x;
                }
            }
            else if (data.type === 'clamp-y')
            {
                if (last.y === data.original.y)
                {
                    last.y = this.parent.y;
                }
            }
        }
    }

     up()
    {
        if (this.parent.input.count() === 0 && this.saved.length)
        {
            const now = performance.now();

            for (const save of this.saved)
            {
                if (save.time >= now - 100)
                {
                    const time = now - save.time;

                    this.x = (this.parent.x - save.x) / time;
                    this.y = (this.parent.y - save.y) / time;
                    this.percentChangeX = this.percentChangeY = this.options.friction;
                    this.timeSinceRelease = 0;
                    break;
                }
            }
        }

        return false;
    }

    /**
     * Manually activate deceleration, starting from the (x, y) velocity components passed in the options.
     *
     * @param {object} options
     * @param {number} [options.x] - Specify x-component of initial velocity.
     * @param {number} [options.y] - Specify y-component of initial velocity.
     */
     activate(options)
    {
        options = options || {};

        if (typeof options.x !== 'undefined')
        {
            this.x = options.x;
            this.percentChangeX = this.options.friction;
        }
        if (typeof options.y !== 'undefined')
        {
            this.y = options.y;
            this.percentChangeY = this.options.friction;
        }
    }

     update(elapsed)
    {
        if (this.paused)
        {
            return;
        }

        /*
         * See https://github.com/davidfig/pixi-viewport/issues/271 for math.
         *
         * The viewport velocity (this.x, this.y) decays exponentially by the the decay factor
         * (this.percentChangeX, this.percentChangeY) each frame. This velocity function is integrated
         * to calculate the displacement.
         */

        const moved = this.x || this.y;

        const ti = this.timeSinceRelease;
        const tf = this.timeSinceRelease + elapsed;

        if (this.x)
        {
            const k = this.percentChangeX;
            const lnk = Math.log(k);

            // Apply velocity delta on the viewport x-coordinate.
            this.parent.x += ((this.x * TP) / lnk) * (Math.pow(k, tf / TP) - Math.pow(k, ti / TP));

            // Apply decay on x-component of velocity
            this.x *= Math.pow(this.percentChangeX, elapsed / TP);
        }
        if (this.y)
        {
            const k = this.percentChangeY;
            const lnk = Math.log(k);

            // Apply velocity delta on the viewport y-coordinate.
            this.parent.y += ((this.y * TP) / lnk) * (Math.pow(k, tf / TP) - Math.pow(k, ti / TP));

            // Apply decay on y-component of velocity
            this.y *= Math.pow(this.percentChangeY, elapsed / TP);
        }

        this.timeSinceRelease += elapsed;

        // End decelerate velocity once it goes under a certain amount of precision.
        if (this.x && this.y)
        {
            if (Math.abs(this.x) < this.options.minSpeed && Math.abs(this.y) < this.options.minSpeed)
            {
                this.x = 0;
                this.y = 0;
            }
        }
        else
        {
            if (Math.abs(this.x || 0) < this.options.minSpeed)
            {
                this.x = 0;
            }
            if (Math.abs(this.y || 0) < this.options.minSpeed)
            {
                this.y = 0;
            }
        }

        if (moved)
        {
            this.parent.emit('moved', { viewport: this.parent, type: 'decelerate' });
        }
    }

     reset()
    {
        this.x = this.y = null;
    }
}

/** Options for {@link Drag}. */


































































































const DEFAULT_DRAG_OPTIONS = {
    direction: 'all',
    pressDrag: true,
    wheel: true,
    wheelScroll: 1,
    reverse: false,
    clampWheel: false,
    underflow: 'center',
    factor: 1,
    mouseButtons: 'all',
    keyToPress: null,
    ignoreKeyToPressOnTouch: false,
    lineHeight: 20,
    wheelSwapAxes: false,
};

/**
 * Plugin to enable panning/dragging of the viewport to move around.
 *
 * @public
 */
class Drag extends Plugin
{
    /** Options used to initialize this plugin, cannot be modified later. */
    

    /** Flags when viewport is moving. */
    

    /** Factor to apply from {@link IDecelerateOptions}'s reverse. */
    

    /** Holds whether dragging is enabled along the x-axis. */
    

    /** Holds whether dragging is enabled along the y-axis. */
    

    /** Flags whether the keys required to drag are pressed currently. */
    

    /** Holds whether the left, center, and right buttons are required to pan. */
    

    /** Underflow factor along x-axis */
    

    /** Underflow factor along y-axis */
    

    /** Last pointer position while panning. */
    

    /** The ID of the pointer currently panning the viewport. */
    

    /** Array of event-handlers for window */
     __init() {this.windowEventHandlers = new Array();}

    /**
     * This is called by {@link Viewport.drag}.
     */
    constructor(parent, options = {})
    {
        super(parent);Drag.prototype.__init.call(this);
        this.options = Object.assign({}, DEFAULT_DRAG_OPTIONS, options);
        this.moved = false;
        this.reverse = this.options.reverse ? 1 : -1;
        this.xDirection = !this.options.direction || this.options.direction === 'all' || this.options.direction === 'x';
        this.yDirection = !this.options.direction || this.options.direction === 'all' || this.options.direction === 'y';
        this.keyIsPressed = false;

        this.parseUnderflow();
        this.mouseButtons(this.options.mouseButtons);

        if (this.options.keyToPress)
        {
            this.handleKeyPresses(this.options.keyToPress);
        }
    }

    /**
     * Handles keypress events and set the keyIsPressed boolean accordingly
     *
     * @param {array} codes - key codes that can be used to trigger drag event
     */
     handleKeyPresses(codes)
    {
        const keydownHandler = (e) => {
            if (codes.includes(e.code))
            { this.keyIsPressed = true; }
        };

        const keyupHandler = (e) => {
            if (codes.includes(e.code))
            { this.keyIsPressed = false; }
        };

        this.addWindowEventHandler("keyup", keyupHandler);
        this.addWindowEventHandler("keydown", keydownHandler);
    }

     addWindowEventHandler(event, handler)
    {
        window.addEventListener(event, handler);
        this.windowEventHandlers.push({event, handler});
    }

      destroy()
    {
        this.windowEventHandlers.forEach(({event, handler}) => {
            window.removeEventListener(event, handler);
        });
    }

    /**
     * initialize mousebuttons array
     * @param {string} buttons
     */
     mouseButtons(buttons)
    {
        if (!buttons || buttons === 'all')
        {
            this.mouse = [true, true, true];
        }
        else
        {
            this.mouse = [
                buttons.indexOf('left') !== -1,
                buttons.indexOf('middle') !== -1,
                buttons.indexOf('right') !== -1
            ];
        }
    }

     parseUnderflow()
    {
        const clamp = this.options.underflow.toLowerCase();

        if (clamp === 'center')
        {
            this.underflowX = 0;
            this.underflowY = 0;
        }
        else
        {
            if (clamp.includes('left'))
            {
                this.underflowX = -1;
            }
            else if (clamp.includes('right'))
            {
                this.underflowX = 1;
            }
            else
            {
                this.underflowX = 0;
            }
            if (clamp.includes('top'))
            {
                this.underflowY = -1;
            }
            else if (clamp.includes('bottom'))
            {
                this.underflowY = 1;
            }
            else
            {
                this.underflowY = 0;
            }
        }
    }

    /**
     * @param {PIXI.InteractionEvent} event
     * @returns {boolean}
     */
     checkButtons(event)
    {
        const isMouse = event.data.pointerType === 'mouse';
        const count = this.parent.input.count();

        if ((count === 1) || (count > 1 && !this.parent.plugins.get('pinch', true)))
        {
            if (!isMouse || this.mouse[event.data.button])
            {
                return true;
            }
        }

        return false;
    }

    /**
     * @param {PIXI.InteractionEvent} event
     * @returns {boolean}
     */
     checkKeyPress(event)
    {
        return (!this.options.keyToPress
            || this.keyIsPressed
            || (this.options.ignoreKeyToPressOnTouch && event.data.pointerType === 'touch'));
    }

     down(event)
    {
        if (this.paused || !this.options.pressDrag)
        {
            return false;
        }
        if (this.checkButtons(event) && this.checkKeyPress(event))
        {
            this.last = { x: event.data.global.x, y: event.data.global.y };
            this.current = event.data.pointerId;

            return true;
        }
        this.last = null;

        return false;
    }

    get active()
    {
        return this.moved;
    }

     move(event)
    {
        if (this.paused || !this.options.pressDrag)
        {
            return false;
        }
        if (this.last && this.current === event.data.pointerId)
        {
            const x = event.data.global.x;
            const y = event.data.global.y;
            const count = this.parent.input.count();

            if (count === 1 || (count > 1 && !this.parent.plugins.get('pinch', true)))
            {
                const distX = x - this.last.x;
                const distY = y - this.last.y;

                if (this.moved
                    || ((this.xDirection && this.parent.input.checkThreshold(distX))
                    || (this.yDirection && this.parent.input.checkThreshold(distY))))
                {
                    const newPoint = { x, y };

                    if (this.xDirection)
                    {
                        this.parent.x += (newPoint.x - this.last.x) * this.options.factor;
                    }
                    if (this.yDirection)
                    {
                        this.parent.y += (newPoint.y - this.last.y) * this.options.factor;
                    }
                    this.last = newPoint;
                    if (!this.moved)
                    {
                        this.parent.emit('drag-start', {
                            event,
                            screen: new Point(this.last.x, this.last.y),
                            world: this.parent.toWorld(new Point(this.last.x, this.last.y)),
                            viewport: this.parent
                        });
                    }
                    this.moved = true;
                    this.parent.emit('moved', { viewport: this.parent, type: 'drag' });

                    return true;
                }
            }
            else
            {
                this.moved = false;
            }
        }

        return false;
    }

     up(event)
    {
        if (this.paused)
        {
            return false;
        }

        const touches = this.parent.input.touches;

        if (touches.length === 1)
        {
            const pointer = touches[0];

            if (pointer.last)
            {
                this.last = { x: pointer.last.x, y: pointer.last.y };
                this.current = pointer.id;
            }
            this.moved = false;

            return true;
        }
        else if (this.last)
        {
            if (this.moved)
            {
                const screen = new Point(this.last.x, this.last.y);

                this.parent.emit('drag-end', {
                    event, screen,
                    world: this.parent.toWorld(screen),
                    viewport: this.parent,
                });
                this.last = null;
                this.moved = false;

                return true;
            }
        }

        return false;
    }

     wheel(event)
    {
        if (this.paused)
        {
            return false;
        }

        if (this.options.wheel)
        {
            const wheel = this.parent.plugins.get('wheel', true);

            if (!wheel || (!wheel.options.wheelZoom && !event.ctrlKey))
            {
                const step = event.deltaMode ? this.options.lineHeight : 1;

                const deltas = [event.deltaX, event.deltaY];
                const [deltaX, deltaY] = this.options.wheelSwapAxes ? deltas.reverse() : deltas;

                if (this.xDirection)
                {
                    this.parent.x += deltaX * step * this.options.wheelScroll * this.reverse;
                }
                if (this.yDirection)
                {
                    this.parent.y += deltaY * step * this.options.wheelScroll * this.reverse;
                }
                if (this.options.clampWheel)
                {
                    this.clamp();
                }
                this.parent.emit('wheel-scroll', this.parent);
                this.parent.emit('moved', { viewport: this.parent, type: 'wheel' });
                if (!this.parent.options.passiveWheel)
                {
                    event.preventDefault();
                }
                if (this.parent.options.stopPropagation)
                {
                    event.stopPropagation();
                }

                return true;
            }
        }

        return false;
    }

     resume()
    {
        this.last = null;
        this.paused = false;
    }

     clamp()
    {
        const decelerate = this.parent.plugins.get('decelerate', true) || {};

        if (this.options.clampWheel !== 'y')
        {
            if (this.parent.screenWorldWidth < this.parent.screenWidth)
            {
                switch (this.underflowX)
                {
                    case -1:
                        this.parent.x = 0;
                        break;
                    case 1:
                        this.parent.x = (this.parent.screenWidth - this.parent.screenWorldWidth);
                        break;
                    default:
                        this.parent.x = (this.parent.screenWidth - this.parent.screenWorldWidth) / 2;
                }
            }
            else
            if (this.parent.left < 0)
            {
                this.parent.x = 0;
                decelerate.x = 0;
            }
            else if (this.parent.right > this.parent.worldWidth)
            {
                this.parent.x = (-this.parent.worldWidth * this.parent.scale.x) + this.parent.screenWidth;
                decelerate.x = 0;
            }
        }
        if (this.options.clampWheel !== 'x')
        {
            if (this.parent.screenWorldHeight < this.parent.screenHeight)
            {
                switch (this.underflowY)
                {
                    case -1:
                        this.parent.y = 0;
                        break;
                    case 1:
                        this.parent.y = (this.parent.screenHeight - this.parent.screenWorldHeight);
                        break;
                    default:
                        this.parent.y = (this.parent.screenHeight - this.parent.screenWorldHeight) / 2;
                }
            }
            else
            {
                if (this.parent.top < 0)
                {
                    this.parent.y = 0;
                    decelerate.y = 0;
                }
                if (this.parent.bottom > this.parent.worldHeight)
                {
                    this.parent.y = (-this.parent.worldHeight * this.parent.scale.y) + this.parent.screenHeight;
                    decelerate.y = 0;
                }
            }
        }
    }
}

/** Options for {@link Follow}. */
























const DEFAULT_FOLLOW_OPTIONS = {
    speed: 0,
    acceleration: null,
    radius: null
};

/**
 * Plugin to follow a display-object.
 *
 * @see Viewport.follow
 * @public
 */
class Follow extends Plugin
{
    /** The options used to initialize this plugin. */
    

    /** The target this plugin will make the viewport follow. */
    

    /** The velocity provided the viewport by following, at the current time. */
    

    /**
     * This is called by {@link Viewport.follow}.
     *
     * @param parent
     * @param target - target to follow
     * @param options
     */
    constructor(parent, target, options = {})
    {
        super(parent);

        this.target = target;
        this.options = Object.assign({}, DEFAULT_FOLLOW_OPTIONS, options);
        this.velocity = { x: 0, y: 0 };
    }

     update(elapsed)
    {
        if (this.paused)
        {
            return;
        }

        const center = this.parent.center;
        let toX = this.target.x;
        let toY = this.target.y;

        if (this.options.radius)
        {
            const distance = Math.sqrt(Math.pow(this.target.y - center.y, 2) + Math.pow(this.target.x - center.x, 2));

            if (distance > this.options.radius)
            {
                const angle = Math.atan2(this.target.y - center.y, this.target.x - center.x);

                toX = this.target.x - (Math.cos(angle) * this.options.radius);
                toY = this.target.y - (Math.sin(angle) * this.options.radius);
            }
            else
            {
                return;
            }
        }

        const deltaX = toX - center.x;
        const deltaY = toY - center.y;

        if (deltaX || deltaY)
        {
            if (this.options.speed)
            {
                if (this.options.acceleration)
                {
                    const angle = Math.atan2(toY - center.y, toX - center.x);
                    const distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

                    if (distance)
                    {
                        const decelerationDistance = (Math.pow(this.velocity.x, 2) + Math.pow(this.velocity.y, 2))
                            / (2 * this.options.acceleration);

                        if (distance > decelerationDistance)
                        {
                            this.velocity = {
                                x: Math.min(this.velocity.x + (this.options.acceleration * elapsed, this.options.speed)),
                                y: Math.min(this.velocity.y + (this.options.acceleration * elapsed, this.options.speed))
                            };
                        }
                        else
                        {
                            this.velocity = {
                                x: Math.max(this.velocity.x - (this.options.acceleration * this.options.speed), 0),
                                y: Math.max(this.velocity.y - (this.options.acceleration * this.options.speed), 0)
                            };
                        }
                        const changeX = Math.cos(angle) * this.velocity.x;
                        const changeY = Math.sin(angle) * this.velocity.y;
                        const x = Math.abs(changeX) > Math.abs(deltaX) ? toX : center.x + changeX;
                        const y = Math.abs(changeY) > Math.abs(deltaY) ? toY : center.y + changeY;

                        this.parent.moveCenter(x, y);
                        this.parent.emit('moved', { viewport: this.parent, type: 'follow' });
                    }
                }
                else
                {
                    const angle = Math.atan2(toY - center.y, toX - center.x);
                    const changeX = Math.cos(angle) * this.options.speed;
                    const changeY = Math.sin(angle) * this.options.speed;
                    const x = Math.abs(changeX) > Math.abs(deltaX) ? toX : center.x + changeX;
                    const y = Math.abs(changeY) > Math.abs(deltaY) ? toY : center.y + changeY;

                    this.parent.moveCenter(x, y);
                    this.parent.emit('moved', { viewport: this.parent, type: 'follow' });
                }
            }
            else
            {
                this.parent.moveCenter(toX, toY);
                this.parent.emit('moved', { viewport: this.parent, type: 'follow' });
            }
        }
    }
}

/** Insets for mouse edges scrolling regions */












































const MOUSE_EDGES_OPTIONS = {
    radius: null,
    distance: null,
    top: null,
    bottom: null,
    left: null,
    right: null,
    speed: 8,
    reverse: false,
    noDecelerate: false,
    linear: false,
    allowButtons: false,
};

/**
 * Scroll viewport when mouse hovers near one of the edges.
 *
 * @event mouse-edge-start(Viewport) emitted when mouse-edge starts
 * @event mouse-edge-end(Viewport) emitted when mouse-edge ends
 */
class MouseEdges extends Plugin
{
    /** Options used to initialize this plugin, cannot be modified later. */
    

    /** Factor from reverse option. */
    

    /** Radius squared */
    

    /** Scroll region size on the left side. */
    

    /** Scroll region size on the top size. */
    

    /** Scroll region size on the right side. */
    

    /** Scroll region size on the bottom side. */
    

    

    

    /**
     * This is called by {@link Viewport.mouseEdges}.
     */
    constructor(parent, options = {})
    {
        super(parent);

        this.options = Object.assign({}, MOUSE_EDGES_OPTIONS, options);
        this.reverse = this.options.reverse ? 1 : -1;
        this.radiusSquared = typeof this.options.radius === 'number' ? Math.pow(this.options.radius, 2) : null;

        this.resize();
    }

     resize()
    {
        const distance = this.options.distance;

        if (distance !== null)
        {
            this.left = distance;
            this.top = distance;
            this.right = this.parent.screenWidth - distance;
            this.bottom = this.parent.screenHeight - distance;
        }
        else if (!this.options.radius)
        {
            this.left = this.options.left;
            this.top = this.options.top;
            this.right = this.options.right === null ? null : this.parent.screenWidth - this.options.right;
            this.bottom = this.options.bottom === null ? null : this.parent.screenHeight - this.options.bottom;
        }
    }

     down()
    {
        if (this.paused)
        {
            return false;
        }
        if (!this.options.allowButtons)
        {
            this.horizontal = this.vertical = null;
        }

        return false;
    }

     move(event)
    {
        if (this.paused)
        {
            return false;
        }
        if ((event.data.pointerType !== 'mouse' && event.data.identifier !== 1)
            || (!this.options.allowButtons && event.data.buttons !== 0))
        {
            return false;
        }

        const x = event.data.global.x;
        const y = event.data.global.y;

        if (this.radiusSquared)
        {
            const center = this.parent.toScreen(this.parent.center);
            const distance = Math.pow(center.x - x, 2) + Math.pow(center.y - y, 2);

            if (distance >= this.radiusSquared)
            {
                const angle = Math.atan2(center.y - y, center.x - x);

                if (this.options.linear)
                {
                    this.horizontal = Math.round(Math.cos(angle)) * this.options.speed * this.reverse * (60 / 1000);
                    this.vertical = Math.round(Math.sin(angle)) * this.options.speed * this.reverse * (60 / 1000);
                }
                else
                {
                    this.horizontal = Math.cos(angle) * this.options.speed * this.reverse * (60 / 1000);
                    this.vertical = Math.sin(angle) * this.options.speed * this.reverse * (60 / 1000);
                }
            }
            else
            {
                if (this.horizontal)
                {
                    this.decelerateHorizontal();
                }
                if (this.vertical)
                {
                    this.decelerateVertical();
                }

                this.horizontal = this.vertical = 0;
            }
        }
        else
        {
            if (this.left !== null && x < this.left)
            {
                this.horizontal = Number(this.reverse) * this.options.speed * (60 / 1000);
            }
            else if (this.right !== null && x > this.right)
            {
                this.horizontal = -1 * this.reverse * this.options.speed * (60 / 1000);
            }
            else
            {
                this.decelerateHorizontal();
                this.horizontal = 0;
            }
            if (this.top !== null && y < this.top)
            {
                this.vertical = Number(this.reverse) * this.options.speed * (60 / 1000);
            }
            else if (this.bottom !== null && y > this.bottom)
            {
                this.vertical = -1 * this.reverse * this.options.speed * (60 / 1000);
            }
            else
            {
                this.decelerateVertical();
                this.vertical = 0;
            }
        }

        return false;
    }

     decelerateHorizontal()
    {
        const decelerate = this.parent.plugins.get('decelerate', true);

        if (this.horizontal && decelerate && !this.options.noDecelerate)
        {
            decelerate.activate({ x: (this.horizontal * this.options.speed * this.reverse) / (1000 / 60) });
        }
    }

     decelerateVertical()
    {
        const decelerate = this.parent.plugins.get('decelerate', true);

        if (this.vertical && decelerate && !this.options.noDecelerate)
        {
            decelerate.activate({ y: (this.vertical * this.options.speed * this.reverse) / (1000 / 60) });
        }
    }

     up()
    {
        if (this.paused)
        {
            return false;
        }
        if (this.horizontal)
        {
            this.decelerateHorizontal();
        }
        if (this.vertical)
        {
            this.decelerateVertical();
        }
        this.horizontal = this.vertical = null;

        return false;
    }

     update()
    {
        if (this.paused)
        {
            return;
        }

        if (this.horizontal || this.vertical)
        {
            const center = this.parent.center;

            if (this.horizontal)
            {
                center.x += this.horizontal * this.options.speed;
            }
            if (this.vertical)
            {
                center.y += this.vertical * this.options.speed;
            }

            this.parent.moveCenter(center);
            this.parent.emit('moved', { viewport: this.parent, type: 'mouse-edges' });
        }
    }
}

/** Options for {@link Pinch}. */


























const DEFAULT_PINCH_OPTIONS = {
    noDrag: false,
    percent: 1,
    center: null,
    factor: 1,
    axis: 'all',
};

/**
 * Plugin for enabling two-finger pinching (or dragging).
 *
 * @public
 */
class Pinch extends Plugin
{
    /** Options used to initialize this plugin. */
    

    /** Flags whether this plugin is active, i.e. a pointer is down on the viewport. */
     __init() {this.active = false;}

    /** Flags whether the viewport is being pinched. */
     __init2() {this.pinching = false;}

     __init3() {this.moved = false;}
    

    /**
     * This is called by {@link Viewport.pinch}.
     */
    constructor(parent, options = {})
    {
        super(parent);Pinch.prototype.__init.call(this);Pinch.prototype.__init2.call(this);Pinch.prototype.__init3.call(this);        this.options = Object.assign({}, DEFAULT_PINCH_OPTIONS, options);
    }

     down()
    {
        if (this.parent.input.count() >= 2)
        {
            this.active = true;

            return true;
        }

        return false;
    }

     isAxisX()
    {
        return ['all', 'x'].includes(this.options.axis);
    }

     isAxisY()
    {
        return ['all', 'y'].includes(this.options.axis);
    }

     move(e)
    {
        if (this.paused || !this.active)
        {
            return false;
        }

        const x = e.data.global.x;
        const y = e.data.global.y;

        const pointers = this.parent.input.touches;

        if (pointers.length >= 2)
        {
            const first = pointers[0] ;
            const second = pointers[1] ;
            const last = (first.last && second.last)
                ? Math.sqrt(Math.pow(second.last.x - first.last.x, 2) + Math.pow(second.last.y - first.last.y, 2))
                : null;

            if (first.id === e.data.pointerId)
            {
                first.last = { x, y, data: e.data } ;
            }
            else if (second.id === e.data.pointerId)
            {
                second.last = { x, y, data: e.data } ;
            }
            if (last)
            {
                let oldPoint;

                const point = {
                    x: (first.last ).x
                        + (((second.last ).x - (first.last ).x) / 2),
                    y: (first.last ).y
                        + (((second.last ).y - (first.last ).y) / 2),
                };

                if (!this.options.center)
                {
                    oldPoint = this.parent.toLocal(point);
                }
                let dist = Math.sqrt(Math.pow(
                    (second.last ).x - (first.last ).x, 2)
                    + Math.pow((second.last ).y - (first.last ).y, 2));

                dist = dist === 0 ? dist = 0.0000000001 : dist;

                const change = (1 - (last / dist)) * this.options.percent
                    * (this.isAxisX() ? this.parent.scale.x : this.parent.scale.y);

                if (this.isAxisX())
                {
                    this.parent.scale.x += change;
                }
                if (this.isAxisY())
                {
                    this.parent.scale.y += change;
                }

                this.parent.emit('zoomed', { viewport: this.parent, type: 'pinch', center: point });

                const clamp = this.parent.plugins.get('clamp-zoom', true);

                if (clamp)
                {
                    clamp.clamp();
                }
                if (this.options.center)
                {
                    this.parent.moveCenter(this.options.center);
                }
                else
                {
                    const newPoint = this.parent.toGlobal(oldPoint );

                    this.parent.x += (point.x - newPoint.x) * this.options.factor;
                    this.parent.y += (point.y - newPoint.y) * this.options.factor;
                    this.parent.emit('moved', { viewport: this.parent, type: 'pinch' });
                }
                if (!this.options.noDrag && this.lastCenter)
                {
                    this.parent.x += (point.x - this.lastCenter.x) * this.options.factor;
                    this.parent.y += (point.y - this.lastCenter.y) * this.options.factor;
                    this.parent.emit('moved', { viewport: this.parent, type: 'pinch' });
                }

                this.lastCenter = point;
                this.moved = true;
            }
            else if (!this.pinching)
            {
                this.parent.emit('pinch-start', this.parent);
                this.pinching = true;
            }

            return true;
        }

        return false;
    }

     up()
    {
        if (this.pinching)
        {
            if (this.parent.input.touches.length <= 1)
            {
                this.active = false;
                this.lastCenter = null;
                this.pinching = false;
                this.moved = false;
                this.parent.emit('pinch-end', this.parent);

                return true;
            }
        }

        return false;
    }
}

const DEFAULT_SNAP_OPTIONS = {
    topLeft: false,
    friction: 0.8,
    time: 1000,
    ease: 'easeInOutSine',
    interrupt: true,
    removeOnComplete: false,
    removeOnInterrupt: false,
    forceStart: false
};

/**
 * @event snap-start(Viewport) emitted each time a snap animation starts
 * @event snap-restart(Viewport) emitted each time a snap resets because of a change in viewport size
 * @event snap-end(Viewport) emitted each time snap reaches its target
 * @event snap-remove(Viewport) emitted if snap plugin is removed
 */
class Snap extends Plugin
{
    
    
    
    

    
    
    
    
    
    

    /**
     * This is called by {@link Viewport.snap}.
     */
    constructor(parent, x, y, options = {})
    {
        super(parent);
        this.options = Object.assign({}, DEFAULT_SNAP_OPTIONS, options);
        this.ease = ease(options.ease, 'easeInOutSine');
        this.x = x;
        this.y = y;

        if (this.options.forceStart)
        {
            this.snapStart();
        }
    }

     snapStart()
    {
        this.percent = 0;
        this.snapping = { time: 0 };
        const current = this.options.topLeft ? this.parent.corner : this.parent.center;

        this.deltaX = this.x - current.x;
        this.deltaY = this.y - current.y;
        this.startX = current.x;
        this.startY = current.y;
        this.parent.emit('snap-start', this.parent);
    }

     wheel()
    {
        if (this.options.removeOnInterrupt)
        {
            this.parent.plugins.remove('snap');
        }

        return false;
    }

     down()
    {
        if (this.options.removeOnInterrupt)
        {
            this.parent.plugins.remove('snap');
        }
        else if (this.options.interrupt)
        {
            this.snapping = null;
        }

        return false;
    }

     up()
    {
        if (this.parent.input.count() === 0)
        {
            const decelerate = this.parent.plugins.get('decelerate', true);

            if (decelerate && (decelerate.x || decelerate.y))
            {
                decelerate.percentChangeX = decelerate.percentChangeY = this.options.friction;
            }
        }

        return false;
    }

     update(elapsed)
    {
        if (this.paused)
        {
            return;
        }
        if (this.options.interrupt && this.parent.input.count() !== 0)
        {
            return;
        }
        if (!this.snapping)
        {
            const current = this.options.topLeft ? this.parent.corner : this.parent.center;

            if (current.x !== this.x || current.y !== this.y)
            {
                this.snapStart();
            }
        }
        else
        {
            const snapping = this.snapping;

            snapping.time += elapsed;
            let finished;
            let x;
            let y;

            const startX = this.startX ;
            const startY = this.startY ;
            const deltaX = this.deltaX ;
            const deltaY = this.deltaY ;

            if (snapping.time > this.options.time)
            {
                finished = true;
                x = startX + deltaX;
                y = startY + deltaY;
            }
            else
            {
                const percent = this.ease(snapping.time, 0, 1, this.options.time);

                x = startX + (deltaX * percent);
                y = startY + (deltaY * percent);
            }
            if (this.options.topLeft)
            {
                this.parent.moveCorner(x, y);
            }
            else
            {
                this.parent.moveCenter(x, y);
            }

            this.parent.emit('moved', { viewport: this.parent, type: 'snap' });

            if (finished)
            {
                if (this.options.removeOnComplete)
                {
                    this.parent.plugins.remove('snap');
                }
                this.parent.emit('snap-end', this.parent);
                this.snapping = null;
            }
        }
    }
}

/** Options for {@link SnapZoom}. */

























































const DEFAULT_SNAP_ZOOM_OPTIONS = {
    width: 0,
    height: 0,
    time: 1000,
    ease: 'easeInOutSine',
    center: null,
    interrupt: true,
    removeOnComplete: false,
    removeOnInterrupt: false,
    forceStart: false,
    noMove: false
};

/**
 * @event snap-zoom-start(Viewport) emitted each time a fit animation starts
 * @event snap-zoom-end(Viewport) emitted each time fit reaches its target
 * @event snap-zoom-end(Viewport) emitted each time fit reaches its target
 */
class SnapZoom extends Plugin
{
    

    
    
    
    
    
    







    /**
     * This is called by {@link Viewport.snapZoom}.
     */
    constructor(parent, options = {})
    {
        super(parent);

        this.options = Object.assign({}, DEFAULT_SNAP_ZOOM_OPTIONS, options);
        this.ease = ease(this.options.ease);

        // Assign defaults for typescript.
        this.xIndependent = false;
        this.yIndependent = false;
        this.xScale = 0;
        this.yScale = 0;

        if (this.options.width > 0)
        {
            this.xScale = parent.screenWidth / this.options.width;
            this.xIndependent = true;
        }
        if (this.options.height > 0)
        {
            this.yScale = parent.screenHeight / this.options.height;
            this.yIndependent = true;
        }

        this.xScale = this.xIndependent ? (this.xScale ) : (this.yScale );
        this.yScale = this.yIndependent ? (this.yScale ) : this.xScale;

        if (this.options.time === 0)
        {
            // TODO: Fix this
            // @ts-expect-error todo
            parent.container.scale.x = this.xScale;

            // TODO: Fix this
            // @ts-expect-error todo
            parent.container.scale.y = this.yScale;

            if (this.options.removeOnComplete)
            {
                this.parent.plugins.remove('snap-zoom');
            }
        }
        else if (options.forceStart)
        {
            this.createSnapping();
        }
    }

     createSnapping()
    {
        const startWorldScreenWidth = this.parent.worldScreenWidth;
        const startWorldScreenHeight = this.parent.worldScreenHeight;
        const endWorldScreenWidth = this.parent.screenWidth / this.xScale;
        const endWorldScreenHeight = this.parent.screenHeight / this.yScale;

        this.snapping = {
            time: 0,
            startX: startWorldScreenWidth,
            startY: startWorldScreenHeight,
            deltaX: endWorldScreenWidth - startWorldScreenWidth,
            deltaY: endWorldScreenHeight - startWorldScreenHeight
        };

        this.parent.emit('snap-zoom-start', this.parent);
    }

     resize()
    {
        this.snapping = null;

        if (this.options.width > 0)
        {
            this.xScale = this.parent.screenWidth / this.options.width;
        }
        if (this.options.height > 0)
        {
            this.yScale = this.parent.screenHeight / this.options.height;
        }
        this.xScale = this.xIndependent ? this.xScale : this.yScale;
        this.yScale = this.yIndependent ? this.yScale : this.xScale;
    }

     wheel()
    {
        if (this.options.removeOnInterrupt)
        {
            this.parent.plugins.remove('snap-zoom');
        }

        return false;
    }

     down()
    {
        if (this.options.removeOnInterrupt)
        {
            this.parent.plugins.remove('snap-zoom');
        }
        else if (this.options.interrupt)
        {
            this.snapping = null;
        }

        return false;
    }

     update(elapsed)
    {
        if (this.paused)
        {
            return;
        }
        if (this.options.interrupt && this.parent.input.count() !== 0)
        {
            return;
        }

        let oldCenter;

        if (!this.options.center && !this.options.noMove)
        {
            oldCenter = this.parent.center;
        }
        if (!this.snapping)
        {
            if (this.parent.scale.x !== this.xScale || this.parent.scale.y !== this.yScale)
            {
                this.createSnapping();
            }
        }
        else if (this.snapping)
        {
            const snapping = this.snapping;

            snapping.time += elapsed;

            if (snapping.time >= this.options.time)
            {
                this.parent.scale.set(this.xScale, this.yScale);
                if (this.options.removeOnComplete)
                {
                    this.parent.plugins.remove('snap-zoom');
                }
                this.parent.emit('snap-zoom-end', this.parent);
                this.snapping = null;
            }
            else
            {
                const snapping = this.snapping;
                const worldScreenWidth = this.ease(snapping.time, snapping.startX, snapping.deltaX, this.options.time);
                const worldScreenHeight = this.ease(snapping.time, snapping.startY, snapping.deltaY, this.options.time);

                this.parent.scale.x = this.parent.screenWidth / worldScreenWidth;
                this.parent.scale.y = this.parent.screenHeight / worldScreenHeight;
            }
            const clamp = this.parent.plugins.get('clamp-zoom', true);

            if (clamp)
            {
                clamp.clamp();
            }
            if (!this.options.noMove)
            {
                if (!this.options.center)
                {
                    this.parent.moveCenter(oldCenter );
                }
                else
                {
                    this.parent.moveCenter(this.options.center);
                }
            }
        }
    }

     resume()
    {
        this.snapping = null;
        super.resume();
    }
}

/** Options for {@link Wheel}. */






































































const DEFAULT_WHEEL_OPTIONS = {
    percent: 0.1,
    smooth: false,
    interrupt: true,
    reverse: false,
    center: null,
    lineHeight: 20,
    axis: 'all',
    keyToPress: null,
    trackpadPinch: false,
    wheelZoom: true,
};

/**
 * Plugin for handling wheel scrolling for viewport zoom.
 *
 * @event wheel({wheel: {dx, dy, dz}, event, viewport})
 */
class Wheel extends Plugin
{
    

    
    
    

    /** Flags whether the keys required to zoom are pressed currently. */
    

    /**
     * This is called by {@link Viewport.wheel}.
     */
    constructor(parent, options = {})
    {
        super(parent);
        this.options = Object.assign({}, DEFAULT_WHEEL_OPTIONS, options);
        this.keyIsPressed = false;

        if (this.options.keyToPress)
        {
            this.handleKeyPresses(this.options.keyToPress);
        }
    }

    /**
     * Handles keypress events and set the keyIsPressed boolean accordingly
     *
     * @param {array} codes - key codes that can be used to trigger zoom event
     */
     handleKeyPresses(codes)
    {
        window.addEventListener('keydown', (e) =>
        {
            if (codes.includes(e.code))
            {
                this.keyIsPressed = true;
            }
        });

        window.addEventListener('keyup', (e) =>
        {
            if (codes.includes(e.code))
            {
                this.keyIsPressed = false;
            }
        });
    }

     checkKeyPress()
    {
        return !this.options.keyToPress || this.keyIsPressed;
    }

     down()
    {
        if (this.options.interrupt)
        {
            this.smoothing = null;
        }

        return false;
    }

     isAxisX()
    {
        return ['all', 'x'].includes(this.options.axis);
    }

     isAxisY()
    {
        return ['all', 'y'].includes(this.options.axis);
    }

     update()
    {
        if (this.smoothing)
        {
            const point = this.smoothingCenter;
            const change = this.smoothing;
            let oldPoint;

            if (!this.options.center)
            {
                oldPoint = this.parent.toLocal(point );
            }
            if (this.isAxisX())
            {
                this.parent.scale.x += change.x;
            }
            if (this.isAxisY())
            {
                this.parent.scale.y += change.y;
            }

            this.parent.emit('zoomed', { viewport: this.parent, type: 'wheel' });
            const clamp = this.parent.plugins.get('clamp-zoom', true);

            if (clamp)
            {
                clamp.clamp();
            }
            if (this.options.center)
            {
                this.parent.moveCenter(this.options.center);
            }
            else
            {
                const newPoint = this.parent.toGlobal(oldPoint );

                this.parent.x += (point ).x - newPoint.x;
                this.parent.y += (point ).y - newPoint.y;
            }

            this.parent.emit('moved', { viewport: this.parent, type: 'wheel' });
            (this.smoothingCount )++;

            if ((this.smoothingCount ) >= this.options.smooth)
            {
                this.smoothing = null;
            }
        }
    }

     pinch(e)
    {
        if (this.paused)
        {
            return;
        }

        const point = this.parent.input.getPointerPosition(e);
        const step = -e.deltaY * (e.deltaMode ? this.options.lineHeight : 1) / 200;
        const change = Math.pow(2, (1 + this.options.percent) * step);

        let oldPoint;

        if (!this.options.center)
        {
            oldPoint = this.parent.toLocal(point);
        }
        if (this.isAxisX())
        {
            this.parent.scale.x *= change;
        }
        if (this.isAxisY())
        {
            this.parent.scale.y *= change;
        }
        this.parent.emit('zoomed', { viewport: this.parent, type: 'wheel' });
        const clamp = this.parent.plugins.get('clamp-zoom', true);

        if (clamp)
        {
            clamp.clamp();
        }
        if (this.options.center)
        {
            this.parent.moveCenter(this.options.center);
        }
        else
        {
            const newPoint = this.parent.toGlobal(oldPoint );

            this.parent.x += point.x - newPoint.x;
            this.parent.y += point.y - newPoint.y;
        }
        this.parent.emit('moved', { viewport: this.parent, type: 'wheel' });
        this.parent.emit('wheel',
            { wheel: { dx: e.deltaX, dy: e.deltaY, dz: e.deltaZ }, event: e, viewport: this.parent });
    }

     wheel(e)
    {
        if (this.paused)
        {
            return false;
        }

        if (!this.checkKeyPress())
        {
            return false;
        }

        if (e.ctrlKey && this.options.trackpadPinch)
        {
            this.pinch(e);
        }
        else if (this.options.wheelZoom)
        {
            const point = this.parent.input.getPointerPosition(e);
            const sign = this.options.reverse ? -1 : 1;
            const step = sign * -e.deltaY * (e.deltaMode ? this.options.lineHeight : 1) / 500;
            const change = Math.pow(2, (1 + this.options.percent) * step);

            if (this.options.smooth)
            {
                const original = {
                    x: this.smoothing ? this.smoothing.x * (this.options.smooth - (this.smoothingCount )) : 0,
                    y: this.smoothing ? this.smoothing.y * (this.options.smooth - (this.smoothingCount )) : 0
                };

                this.smoothing = {
                    x: (((this.parent.scale.x + original.x) * change) - this.parent.scale.x) / this.options.smooth,
                    y: (((this.parent.scale.y + original.y) * change) - this.parent.scale.y) / this.options.smooth,
                };
                this.smoothingCount = 0;
                this.smoothingCenter = point;
            }
            else
            {
                let oldPoint;

                if (!this.options.center)
                {
                    oldPoint = this.parent.toLocal(point);
                }
                if (this.isAxisX())
                {
                    this.parent.scale.x *= change;
                }
                if (this.isAxisY())
                {
                    this.parent.scale.y *= change;
                }
                this.parent.emit('zoomed', { viewport: this.parent, type: 'wheel' });
                const clamp = this.parent.plugins.get('clamp-zoom', true);

                if (clamp)
                {
                    clamp.clamp();
                }
                if (this.options.center)
                {
                    this.parent.moveCenter(this.options.center);
                }
                else
                {
                    const newPoint = this.parent.toGlobal(oldPoint );

                    this.parent.x += point.x - newPoint.x;
                    this.parent.y += point.y - newPoint.y;
                }
            }

            this.parent.emit('moved', { viewport: this.parent, type: 'wheel' });
            this.parent.emit('wheel',
                { wheel: { dx: e.deltaX, dy: e.deltaY, dz: e.deltaZ }, event: e, viewport: this.parent });
        }

        return !this.parent.options.passiveWheel;
    }
}

/**
 * Handles all input for Viewport
 *
 * @internal
 * @ignore
 * @private
 */
class InputManager
{
    

    
    
    
    
    /** List of active touches on viewport */
    

    constructor(viewport)
    {
        this.viewport = viewport;
        this.touches = [];

        this.addListeners();
    }

    /** Add input listeners */
     addListeners()
    {
        this.viewport.interactive = true;
        if (!this.viewport.forceHitArea)
        {
            this.viewport.hitArea = new Rectangle(0, 0, this.viewport.worldWidth, this.viewport.worldHeight);
        }
        this.viewport.on('pointerdown', this.down, this);
        this.viewport.on('pointermove', this.move, this);
        this.viewport.on('pointerup', this.up, this);
        this.viewport.on('pointerupoutside', this.up, this);
        this.viewport.on('pointercancel', this.up, this);
        this.viewport.on('pointerout', this.up, this);
        this.wheelFunction = (e) => this.handleWheel(e);
        this.viewport.options.divWheel.addEventListener(
            'wheel',
            this.wheelFunction ,
            { passive: this.viewport.options.passiveWheel });
        this.isMouseDown = false;
    }

    /**
     * Removes all event listeners from viewport
     * (useful for cleanup of wheel when removing viewport)
     */
     destroy()
    {
        this.viewport.options.divWheel.removeEventListener('wheel', this.wheelFunction );
    }

    /**
     * handle down events for viewport
     *
     * @param {PIXI.InteractionEvent} event
     */
     down(event)
    {
        if (this.viewport.pause || !this.viewport.worldVisible)
        {
            return;
        }
        if (event.data.pointerType === 'mouse')
        {
            this.isMouseDown = true;
        }
        else if (!this.get(event.data.pointerId))
        {
            this.touches.push({ id: event.data.pointerId, last: null });
        }
        if (this.count() === 1)
        {
            this.last = event.data.global.clone();

            // clicked event does not fire if viewport is decelerating or bouncing
            const decelerate = this.viewport.plugins.get('decelerate', true);
            const bounce = this.viewport.plugins.get('bounce', true);

            if ((!decelerate || !decelerate.isActive()) && (!bounce || !bounce.isActive()))
            {
                this.clickedAvailable = true;
            }
            else
            {
                this.clickedAvailable = false;
            }
        }
        else
        {
            this.clickedAvailable = false;
        }

        const stop = this.viewport.plugins.down(event);

        if (stop && this.viewport.options.stopPropagation)
        {
            event.stopPropagation();
        }
    }

    /** Clears all pointer events */
     clear()
    {
        this.isMouseDown = false;
        this.touches = [];
        this.last = null;
    }

    /**
     * @param {number} change
     * @returns whether change exceeds threshold
     */
     checkThreshold(change)
    {
        if (Math.abs(change) >= this.viewport.threshold)
        {
            return true;
        }

        return false;
    }

    /** Handle move events for viewport */
     move(event)
    {
        if (this.viewport.pause || !this.viewport.worldVisible)
        {
            return;
        }

        const stop = this.viewport.plugins.move(event);

        if (this.clickedAvailable && this.last)
        {
            const distX = event.data.global.x - this.last.x;
            const distY = event.data.global.y - this.last.y;

            if (this.checkThreshold(distX) || this.checkThreshold(distY))
            {
                this.clickedAvailable = false;
            }
        }

        if (stop && this.viewport.options.stopPropagation)
        {
            event.stopPropagation();
        }
    }

    /** Handle up events for viewport */
     up(event)
    {
        if (this.viewport.pause || !this.viewport.worldVisible)
        {
            return;
        }

        if (event.data.pointerType === 'mouse')
        {
            this.isMouseDown = false;
        }

        if (event.data.pointerType !== 'mouse')
        {
            this.remove(event.data.pointerId);
        }

        const stop = this.viewport.plugins.up(event);

        if (this.clickedAvailable && this.count() === 0 && this.last)
        {
            this.viewport.emit('clicked', {
                event,
                screen: this.last,
                world: this.viewport.toWorld(this.last),
                viewport: this
            });
            this.clickedAvailable = false;
        }

        if (stop && this.viewport.options.stopPropagation)
        {
            event.stopPropagation();
        }
    }

    /** Gets pointer position if this.interaction is set */
     getPointerPosition(event)
    {
        const point = new Point();

        if (this.viewport.options.interaction)
        {
            this.viewport.options.interaction.mapPositionToPoint(point, event.clientX, event.clientY);
        }
        else if (this.viewport.options.useDivWheelForInputManager && this.viewport.options.divWheel)
        {
            const rect = this.viewport.options.divWheel.getBoundingClientRect();

            point.x = event.clientX - rect.left;
            point.y = event.clientY - rect.top;
        }
        else
        {
            point.x = event.clientX;
            point.y = event.clientY;
        }

        return point;
    }

    /** Handle wheel events */
     handleWheel(event)
    {
        if (this.viewport.pause || !this.viewport.worldVisible)
        {
            return;
        }

        // do not handle events coming from other elements
        if (this.viewport.options.interaction
            && (this.viewport.options.interaction ).interactionDOMElement !== event.target)
        {
            return;
        }

        // only handle wheel events where the mouse is over the viewport
        const point = this.viewport.toLocal(this.getPointerPosition(event));

        if (this.viewport.left <= point.x
            && point.x <= this.viewport.right
            && this.viewport.top <= point.y
            && point.y <= this.viewport.bottom)
        {
            const stop = this.viewport.plugins.wheel(event);

            if (stop && !this.viewport.options.passiveWheel)
            {
                event.preventDefault();
            }
        }
    }

     pause()
    {
        this.touches = [];
        this.isMouseDown = false;
    }

    /** Get touch by id */
     get(id)
    {
        for (const touch of this.touches)
        {
            if (touch.id === id)
            {
                return touch;
            }
        }

        return null;
    }

    /** Remove touch by number */
    remove(id)
    {
        for (let i = 0; i < this.touches.length; i++)
        {
            if (this.touches[i].id === id)
            {
                this.touches.splice(i, 1);

                return;
            }
        }
    }

    /**
     * @returns {number} count of mouse/touch pointers that are down on the viewport
     */
    count()
    {
        return (this.isMouseDown ? 1 : 0) + this.touches.length;
    }
}

function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

















const PLUGIN_ORDER = [
    'drag',
    'pinch',
    'wheel',
    'follow',
    'mouse-edges',
    'decelerate',
    'animate',
    'bounce',
    'snap-zoom',
    'clamp-zoom',
    'snap',
    'clamp',
];

/**
 * Use this to access current plugins or add user-defined plugins
 *
 * @public
 */
class PluginManager
{
    /** Maps mounted plugins by their type */
    

    /**
     * List of plugins mounted
     *
     * This list is kept sorted by the internal priority of plugins (hard-coded).
     */
    

    /** The viewport using the plugins managed by `this`. */
    

    /** This is called by {@link Viewport} to initialize the {@link Viewport.plugins plugins}. */
    constructor(viewport)
    {
        this.viewport = viewport;
        this.list = [];
        this.plugins = {};
    }

    /**
     * Inserts a named plugin or a user plugin into the viewport
     * default plugin order: 'drag', 'pinch', 'wheel', 'follow', 'mouse-edges', 'decelerate', 'bounce',
     * 'snap-zoom', 'clamp-zoom', 'snap', 'clamp'
     *
     * @param {string} name of plugin
     * @param {Plugin} plugin - instantiated Plugin class
     * @param {number} index to insert userPlugin (otherwise inserts it at the end)
     */
     add(name, plugin, index = PLUGIN_ORDER.length)
    {

        const oldPlugin = this.plugins[name];

        if (oldPlugin)
        {
            oldPlugin.destroy();
        }

        this.plugins[name] = plugin;

        const current = PLUGIN_ORDER.indexOf(name);

        if (current !== -1)
        {
            PLUGIN_ORDER.splice(current, 1);
        }

        PLUGIN_ORDER.splice(index, 0, name);
        this.sort();
    }

    













    /**
     * Get plugin
     *
     * @param {string} name of plugin
     * @param {boolean} [ignorePaused] return null if plugin is paused
     */
     get(name, ignorePaused)
    {
        if (ignorePaused)
        {
            if (_optionalChain([this, 'access', _ => _.plugins, 'access', _2 => _2[name], 'optionalAccess', _3 => _3.paused]))
            {
                return null;
            }
        }

        return this.plugins[name] ;
    }

    /**
     * Update all active plugins
     *
     * @internal
     * @ignore
     * @param {number} elapsed type in milliseconds since last update
     */
     update(elapsed)
    {
        for (const plugin of this.list)
        {
            plugin.update(elapsed);
        }
    }

    /**
     * Resize all active plugins
     *
     * @internal
     * @ignore
     */
     resize()
    {
        for (const plugin of this.list)
        {
            plugin.resize();
        }
    }

    /** Clamps and resets bounce and decelerate (as needed) after manually moving viewport */
     reset()
    {
        for (const plugin of this.list)
        {
            plugin.reset();
        }
    }

    /** removes all installed plugins */
     removeAll()
    {
        this.list.forEach((plugin) => {
            plugin.destroy();
        });
        this.plugins = {};
        this.sort();
    }

    /**
     * Removes installed plugin
     *
     * @param {string} name of plugin (e.g., 'drag', 'pinch')
     */
     remove(name)
    {
        if (this.plugins[name])
        {
            _optionalChain([this, 'access', _4 => _4.plugins, 'access', _5 => _5[name], 'optionalAccess', _6 => _6.destroy, 'call', _7 => _7()]);
            delete this.plugins[name];
            this.viewport.emit(`${name}-remove`);
            this.sort();
        }
    }

    /**
     * Pause plugin
     *
     * @param {string} name of plugin (e.g., 'drag', 'pinch')
     */
     pause(name)
    {
        _optionalChain([this, 'access', _8 => _8.plugins, 'access', _9 => _9[name], 'optionalAccess', _10 => _10.pause, 'call', _11 => _11()]);
    }

    /**
     * Resume plugin
     *
     * @param {string} name of plugin (e.g., 'drag', 'pinch')
     */
     resume(name)
    {
        _optionalChain([this, 'access', _12 => _12.plugins, 'access', _13 => _13[name], 'optionalAccess', _14 => _14.resume, 'call', _15 => _15()]);
    }

    /**
     * Sort plugins according to PLUGIN_ORDER
     *
     * @internal
     * @ignore
     */
     sort()
    {
        this.list = [];

        for (const plugin of PLUGIN_ORDER)
        {
            if (this.plugins[plugin])
            {
                this.list.push(this.plugins[plugin] );
            }
        }
    }

    /**
     * Handle down for all plugins
     *
     * @internal
     * @ignore
     */
     down(event)
    {
        let stop = false;

        for (const plugin of this.list)
        {
            if (plugin.down(event))
            {
                stop = true;
            }
        }

        return stop;
    }

    /**
     * Handle move for all plugins
     *
     * @internal
     * @ignore
     */
     move(event)
    {
        let stop = false;

        for (const plugin of this.viewport.plugins.list)
        {
            if (plugin.move(event))
            {
                stop = true;
            }
        }

        return stop;
    }

    /**
     * Handle up for all plugins
     *
     * @internal
     * @ignore
     */
     up(event)
    {
        let stop = false;

        for (const plugin of this.list)
        {
            if (plugin.up(event))
            {
                stop = true;
            }
        }

        return stop;
    }

    /**
     * Handle wheel event for all plugins
     *
     * @internal
     * @ignore
     */
     wheel(e)
    {
        let result = false;

        for (const plugin of this.list)
        {
            if (plugin.wheel(e))
            {
                result = true;
            }
        }

        return result;
    }
}

/** Options for {@link Viewport}. */


































































































const DEFAULT_VIEWPORT_OPTIONS = {
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    worldWidth: null,
    worldHeight: null,
    threshold: 5,
    passiveWheel: true,
    stopPropagation: false,
    forceHitArea: null,
    noTicker: false,
    interaction: null,
    disableOnContextMenu: false,
    ticker: Ticker.shared,
};

/**
 * Main class to use when creating a Viewport
 *
 * @public
 * @fires clicked
 * @fires drag-start
 * @fires drag-end
 * @fires drag-remove
 * @fires pinch-start
 * @fires pinch-end
 * @fires pinch-remove
 * @fires snap-start
 * @fires snap-end
 * @fires snap-remove
 * @fires snap-zoom-start
 * @fires snap-zoom-end
 * @fires snap-zoom-remove
 * @fires bounce-x-start
 * @fires bounce-x-end
 * @fires bounce-y-start
 * @fires bounce-y-end
 * @fires bounce-remove
 * @fires wheel
 * @fires wheel-remove
 * @fires wheel-scroll
 * @fires wheel-scroll-remove
 * @fires mouse-edge-start
 * @fires mouse-edge-end
 * @fires mouse-edge-remove
 * @fires moved
 * @fires moved-end
 * @fires zoomed
 * @fires zoomed-end
 * @fires frame-end
 */
class Viewport extends Container
{
    /** Flags whether the viewport is being panned */
    

    
    

    /** Number of pixels to move to trigger an input event (e.g., drag, pinch) or disable a clicked event */
    

    

    /** Use this to add user plugins or access existing plugins (e.g., to pause, resume, or remove them) */
    

    /** Flags whether the viewport zoom is being changed. */
    

    

    /** The options passed when creating this viewport, merged with the default values */
    

    
    
    
    
    
    
    
     __init() {this._disableOnContextMenu = (e) => e.preventDefault();}

    /**
     * @param {IViewportOptions} ViewportOptions
     * @param {number} [options.screenWidth=window.innerWidth]
     * @param {number} [options.screenHeight=window.innerHeight]
     * @param {number} [options.worldWidth=this.width]
     * @param {number} [options.worldHeight=this.height]
     * @param {number} [options.threshold=5] number of pixels to move to trigger an input event (e.g., drag, pinch)
     * or disable a clicked event
     * @param {boolean} [options.passiveWheel=true] whether the 'wheel' event is set to passive (note: if false,
     * e.preventDefault() will be called when wheel is used over the viewport)
     * @param {boolean} [options.stopPropagation=false] whether to stopPropagation of events that impact the viewport
     * (except wheel events, see options.passiveWheel)
     * @param {HitArea} [options.forceHitArea] change the default hitArea from world size to a new value
     * @param {boolean} [options.noTicker] set this if you want to manually call update() function on each frame
     * @param {PIXI.Ticker} [options.ticker=PIXI.Ticker.shared] use this PIXI.ticker for updates
     * @param {PIXI.InteractionManager} [options.interaction=null] InteractionManager, available from instantiated
     * WebGLRenderer/CanvasRenderer.plugins.interaction - used to calculate pointer position relative to canvas
     * location on screen
     * @param {HTMLElement} [options.divWheel=document.body] div to attach the wheel event
     * @param {boolean} [options.disableOnContextMenu] remove oncontextmenu=() => {} from the divWheel element
     */
    constructor(options = {})
    {
        super();Viewport.prototype.__init.call(this);        this.options = Object.assign(
            {},
            { divWheel: document.body },
            DEFAULT_VIEWPORT_OPTIONS,
            options
        );

        this.screenWidth = this.options.screenWidth;
        this.screenHeight = this.options.screenHeight;

        this._worldWidth = this.options.worldWidth;
        this._worldHeight = this.options.worldHeight;
        this.forceHitArea = this.options.forceHitArea;
        this.threshold = this.options.threshold;

        this.options.divWheel = this.options.divWheel || document.body;

        if (this.options.disableOnContextMenu)
        {
            this.options.divWheel.addEventListener('contextmenu', this._disableOnContextMenu);
        }
        if (!this.options.noTicker)
        {
            this.tickerFunction = () => this.update(this.options.ticker.elapsedMS);
            this.options.ticker.add(this.tickerFunction);
        }

        this.input = new InputManager(this);
        this.plugins = new PluginManager(this);
    }

    /** Overrides PIXI.Container's destroy to also remove the 'wheel' and PIXI.Ticker listeners */
    destroy(options)
    {
        if (!this.options.noTicker && this.tickerFunction)
        {
            this.options.ticker.remove(this.tickerFunction);
        }
        if (this.options.disableOnContextMenu)
        {
            this.options.divWheel.removeEventListener('contextmenu', this._disableOnContextMenu);
        }

        this.input.destroy();
        super.destroy(options);
    }

    /**
     * Update viewport on each frame.
     *
     * By default, you do not need to call this unless you set `options.noTicker=true`.
     *
     * @param {number} elapsed time in milliseconds since last update
     */
    update(elapsed)
    {
        if (!this.pause)
        {
            this.plugins.update(elapsed);

            if (this.lastViewport)
            {
                // Check for moved-end event
                if (this.lastViewport.x !== this.x || this.lastViewport.y !== this.y)
                {
                    this.moving = true;
                }
                else if (this.moving)
                {
                    this.emit('moved-end', this);
                    this.moving = false;
                }

                // Check for zoomed-end event
                if (this.lastViewport.scaleX !== this.scale.x || this.lastViewport.scaleY !== this.scale.y)
                {
                    this.zooming = true;
                }
                else if (this.zooming)
                {
                    this.emit('zoomed-end', this);
                    this.zooming = false;
                }
            }

            if (!this.forceHitArea)
            {
                this._hitAreaDefault = new Rectangle(this.left, this.top, this.worldScreenWidth, this.worldScreenHeight);
                this.hitArea = this._hitAreaDefault;
            }

            this._dirty = this._dirty || !this.lastViewport
                || this.lastViewport.x !== this.x || this.lastViewport.y !== this.y
                || this.lastViewport.scaleX !== this.scale.x || this.lastViewport.scaleY !== this.scale.y;

            this.lastViewport = {
                x: this.x,
                y: this.y,
                scaleX: this.scale.x,
                scaleY: this.scale.y
            };
            this.emit('frame-end', this);
        }
    }

    /**
     * Use this to set screen and world sizes, needed for pinch/wheel/clamp/bounce.
     * @param {number} screenWidth=window.innerWidth
     * @param {number} screenHeight=window.innerHeight
     * @param {number} [worldWidth]
     * @param {number} [worldHeight]
     */
    resize(
        screenWidth = window.innerWidth,
        screenHeight = window.innerHeight,
        worldWidth,
        worldHeight
    )
    {
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;

        if (typeof worldWidth !== 'undefined')
        {
            this._worldWidth = worldWidth;
        }
        if (typeof worldHeight !== 'undefined')
        {
            this._worldHeight = worldHeight;
        }

        this.plugins.resize();
        this.dirty = true;
    }

    /** World width, in pixels */
    get worldWidth()
    {
        if (this._worldWidth)
        {
            return this._worldWidth;
        }

        return this.width / this.scale.x;
    }
    set worldWidth(value)
    {
        this._worldWidth = value;
        this.plugins.resize();
    }

    /** World height, in pixels */
    get worldHeight()
    {
        if (this._worldHeight)
        {
            return this._worldHeight;
        }

        return this.height / this.scale.y;
    }
    set worldHeight(value)
    {
        this._worldHeight = value;
        this.plugins.resize();
    }

    /** Get visible world bounds of viewport */
     getVisibleBounds()
    {
        return new Rectangle(this.left, this.top, this.worldScreenWidth, this.worldScreenHeight);
    }

    /** Change coordinates from screen to world */
    



    /**
     * Changes coordinate from screen to world
     * @param {number|PIXI.Point} x
     * @param {number} y
     * @returns {PIXI.Point}
     */
     toWorld(x, y)
    {
        if (arguments.length === 2)
        {
            return this.toLocal(new Point(x , y));
        }

        return this.toLocal(x );
    }

    /** Change coordinates from world to screen */
    



    /**
     * Changes coordinate from world to screen
     * @param {number|PIXI.Point} x
     * @param {number} y
     * @returns {PIXI.Point}
     */
     toScreen(x, y)
    {
        if (arguments.length === 2)
        {
            return this.toGlobal(new Point(x , y));
        }

        return this.toGlobal(x );
    }

    /** Screen width in world coordinates */
    get worldScreenWidth()
    {
        return this.screenWidth / this.scale.x;
    }

    /** Screen height in world coordinates */
    get worldScreenHeight()
    {
        return this.screenHeight / this.scale.y;
    }

    /** World width in screen coordinates */
    get screenWorldWidth()
    {
        return this.worldWidth * this.scale.x;
    }

    /** World height in screen coordinates */
    get screenWorldHeight()
    {
        return this.worldHeight * this.scale.y;
    }

    /** Center of screen in world coordinates */
    get center()
    {
        return new Point(
            (this.worldScreenWidth / 2) - (this.x / this.scale.x),
            (this.worldScreenHeight / 2) - (this.y / this.scale.y),
        );
    }
    set center(value)
    {
        this.moveCenter(value);
    }

    




    /**
     * Move center of viewport to (x, y)
     * @param {number|PIXI.Point} x
     * @param {number} [y]
     * @return {Viewport}
     */
     moveCenter(...args)
    {
        let x;
        let y;

        if (typeof args[0] === 'number')
        {
            x = args[0];
            y = args[1] ;
        }
        else
        {
            x = args[0].x;
            y = args[0].y;
        }

        const newX = ((this.worldScreenWidth / 2) - x) * this.scale.x;
        const newY = ((this.worldScreenHeight / 2) - y) * this.scale.y;

        if (this.x !== newX || this.y !== newY)
        {
            this.position.set(newX, newY);
            this.plugins.reset();
            this.dirty = true;
        }

        return this;
    }

    /** Top-left corner of Viewport */
    get corner()
    {
        return new Point(-this.x / this.scale.x, -this.y / this.scale.y);
    }
    set corner(value)
    {
        this.moveCorner(value);
    }

    /** Move Viewport's top-left corner; also clamps and resets decelerate and bounce (as needed) */
    




    /**
     * MoveCorner
     * @param {number|PIXI.Point} x
     * @param {number} [y]
     * @returns {Viewport}
     */
     moveCorner(...args)
    {
        let x;
        let y;

        if (args.length === 1)
        {
            x = -args[0].x * this.scale.x;
            y = -args[0].y * this.scale.y;
        }
        else
        {
            x = -args[0] * this.scale.x;
            y = -args[1] * this.scale.y;
        }

        if (x !== this.x || y !== this.y)
        {
            this.position.set(x, y);
            this.plugins.reset();
            this.dirty = true;
        }

        return this;
    }

    /** Get how many world pixels fit in screen's width */
    get screenWidthInWorldPixels()
    {
        return this.screenWidth / this.scale.x;
    }

    /** Get how many world pixels fit on screen's height */
    get screenHeightInWorldPixels()
    {
        return this.screenHeight / this.scale.y;
    }

    /**
     * Find the scale value that fits a world width on the screen
     * does not change the viewport (use fit... to change)
     *
     * @param width - Width in world pixels
     * @return - scale
     */
    findFitWidth(width)
    {
        return this.screenWidth / width;
    }

    /**
     * Finds the scale value that fits a world height on the screens
     * does not change the viewport (use fit... to change)
     *
     * @param height - Height in world pixels
     * @return - scale
     */
    findFitHeight(height)
    {
        return this.screenHeight / height;
    }

    /**
     * Finds the scale value that fits the smaller of a world width and world height on the screen
     * does not change the viewport (use fit... to change)
     *
     * @param {number} width in world pixels
     * @param {number} height in world pixels
     * @returns {number} scale
     */
    findFit(width, height)
    {
        const scaleX = this.screenWidth / width;
        const scaleY = this.screenHeight / height;

        return Math.min(scaleX, scaleY);
    }

    /**
     * Finds the scale value that fits the larger of a world width and world height on the screen
     * does not change the viewport (use fit... to change)
     *
     * @param {number} width in world pixels
     * @param {number} height in world pixels
     * @returns {number} scale
     */
    findCover(width, height)
    {
        const scaleX = this.screenWidth / width;
        const scaleY = this.screenHeight / height;

        return Math.max(scaleX, scaleY);
    }

    /**
     * Change zoom so the width fits in the viewport
     *
     * @param width - width in world coordinates
     * @param center - maintain the same center
     * @param scaleY - whether to set scaleY=scaleX
     * @param noClamp - whether to disable clamp-zoom
     * @returns {Viewport} this
     */
    fitWidth(width = this.worldWidth, center, scaleY = true, noClamp)
    {
        let save;

        if (center)
        {
            save = this.center;
        }
        this.scale.x = this.screenWidth / width;

        if (scaleY)
        {
            this.scale.y = this.scale.x;
        }

        const clampZoom = this.plugins.get('clamp-zoom', true);

        if (!noClamp && clampZoom)
        {
            clampZoom.clamp();
        }

        if (center && save)
        {
            this.moveCenter(save);
        }

        return this;
    }

    /**
     * Change zoom so the height fits in the viewport
     *
     * @param {number} [height=this.worldHeight] in world coordinates
     * @param {boolean} [center] maintain the same center of the screen after zoom
     * @param {boolean} [scaleX=true] whether to set scaleX = scaleY
     * @param {boolean} [noClamp] whether to disable clamp-zoom
     * @returns {Viewport} this
     */
    fitHeight(height = this.worldHeight, center, scaleX = true, noClamp)
    {
        let save;

        if (center)
        {
            save = this.center;
        }
        this.scale.y = this.screenHeight / height;

        if (scaleX)
        {
            this.scale.x = this.scale.y;
        }

        const clampZoom = this.plugins.get('clamp-zoom', true);

        if (!noClamp && clampZoom)
        {
            clampZoom.clamp();
        }

        if (center && save)
        {
            this.moveCenter(save);
        }

        return this;
    }

    /**
     * Change zoom so it fits the entire world in the viewport
     *
     * @param {boolean} center maintain the same center of the screen after zoom
     * @returns {Viewport} this
     */
    fitWorld(center)
    {
        let save;

        if (center)
        {
            save = this.center;
        }

        this.scale.x = this.screenWidth / this.worldWidth;
        this.scale.y = this.screenHeight / this.worldHeight;

        if (this.scale.x < this.scale.y)
        {
            this.scale.y = this.scale.x;
        }
        else
        {
            this.scale.x = this.scale.y;
        }

        const clampZoom = this.plugins.get('clamp-zoom', true);

        if (clampZoom)
        {
            clampZoom.clamp();
        }

        if (center && save)
        {
            this.moveCenter(save);
        }

        return this;
    }

    /**
     * Change zoom so it fits the size or the entire world in the viewport
     *
     * @param {boolean} [center] maintain the same center of the screen after zoom
     * @param {number} [width=this.worldWidth] desired width
     * @param {number} [height=this.worldHeight] desired height
     * @returns {Viewport} this
     */
    fit(center, width = this.worldWidth, height = this.worldHeight)
    {
        let save;

        if (center)
        {
            save = this.center;
        }

        this.scale.x = this.screenWidth / width;
        this.scale.y = this.screenHeight / height;

        if (this.scale.x < this.scale.y)
        {
            this.scale.y = this.scale.x;
        }
        else
        {
            this.scale.x = this.scale.y;
        }
        const clampZoom = this.plugins.get('clamp-zoom', true);

        if (clampZoom)
        {
            clampZoom.clamp();
        }
        if (center && save)
        {
            this.moveCenter(save);
        }

        return this;
    }

    /**
     * Zoom viewport to specific value.
     *
     * @param {number} scale value (e.g., 1 would be 100%, 0.25 would be 25%)
     * @param {boolean} [center] maintain the same center of the screen after zoom
     * @return {Viewport} this
     */
    setZoom(scale, center)
    {
        let save;

        if (center)
        {
            save = this.center;
        }
        this.scale.set(scale);
        const clampZoom = this.plugins.get('clamp-zoom', true);

        if (clampZoom)
        {
            clampZoom.clamp();
        }
        if (center && save)
        {
            this.moveCenter(save);
        }

        return this;
    }

    /**
     * Zoom viewport by a certain percent (in both x and y direction).
     *
     * @param {number} percent change (e.g., 0.25 would increase a starting scale of 1.0 to 1.25)
     * @param {boolean} [center] maintain the same center of the screen after zoom
     * @return {Viewport} this
     */
    zoomPercent(percent, center)
    {
        return this.setZoom(this.scale.x + (this.scale.x * percent), center);
    }

    /**
     * Zoom viewport by increasing/decreasing width by a certain number of pixels.
     *
     * @param {number} change in pixels
     * @param {boolean} [center] maintain the same center of the screen after zoom
     * @return {Viewport} this
     */
    zoom(change, center)
    {
        this.fitWidth(change + this.worldScreenWidth, center);

        return this;
    }

    /** Changes scale of viewport and maintains center of viewport */
    get scaled()
    {
        return this.scale.x;
    }
    set scaled(scale)
    {
        this.setZoom(scale, true);
    }

    /**
     * Returns zoom to the desired scale
     *
     * @param {ISnapZoomOptions} options
     * @param {number} [options.width=0] - the desired width to snap (to maintain aspect ratio, choose width or height)
     * @param {number} [options.height=0] - the desired height to snap (to maintain aspect ratio, choose width or height)
     * @param {number} [options.time=1000] - time for snapping in ms
     * @param {(string|function)} [options.ease=easeInOutSine] ease function or name (see http://easings.net/
     *   for supported names)
     * @param {PIXI.Point} [options.center] - place this point at center during zoom instead of center of the viewport
     * @param {boolean} [options.interrupt=true] - pause snapping with any user input on the viewport
     * @param {boolean} [options.removeOnComplete] - removes this plugin after snapping is complete
     * @param {boolean} [options.removeOnInterrupt] - removes this plugin if interrupted by any user input
     * @param {boolean} [options.forceStart] - starts the snap immediately regardless of whether the viewport is at the
     *   desired zoom
     * @param {boolean} [options.noMove] - zoom but do not move
     */
    snapZoom(options)
    {
        this.plugins.add('snap-zoom', new SnapZoom(this, options));

        return this;
    }

    /** Is container out of world bounds */
    OOB()






    {
        return {
            left: this.left < 0,
            right: this.right > this.worldWidth,
            top: this.top < 0,
            bottom: this.bottom > this.worldHeight,
            cornerPoint: new Point(
                (this.worldWidth * this.scale.x) - this.screenWidth,
                (this.worldHeight * this.scale.y) - this.screenHeight
            )
        };
    }

    /** World coordinates of the right edge of the screen */
    get right()
    {
        return (-this.x / this.scale.x) + this.worldScreenWidth;
    }
    set right(value)
    {
        this.x = (-value * this.scale.x) + this.screenWidth;
        this.plugins.reset();
    }

    /** World coordinates of the left edge of the screen */
    get left()
    {
        return -this.x / this.scale.x;
    }
    set left(value)
    {
        this.x = -value * this.scale.x;
        this.plugins.reset();
    }

    /** World coordinates of the top edge of the screen */
    get top()
    {
        return -this.y / this.scale.y;
    }
    set top(value)
    {
        this.y = -value * this.scale.y;
        this.plugins.reset();
    }

    /** World coordinates of the bottom edge of the screen */
    get bottom()
    {
        return (-this.y / this.scale.y) + this.worldScreenHeight;
    }
    set bottom(value)
    {
        this.y = (-value * this.scale.y) + this.screenHeight;
        this.plugins.reset();
    }

    /**
     * Determines whether the viewport is dirty (i.e., needs to be rendered to the screen because of a change)
     */
    get dirty()
    {
        return !!this._dirty;
    }
    set dirty(value)
    {
        this._dirty = value;
    }

    /**
     * Permanently changes the Viewport's hitArea
     *
     * NOTE: if not set then hitArea = PIXI.Rectangle(Viewport.left, Viewport.top, Viewport.worldScreenWidth,
     * Viewport.worldScreenHeight)
     */
    get forceHitArea()
    {
        return this._forceHitArea;
    }
    set forceHitArea(value)
    {
        if (value)
        {
            this._forceHitArea = value;
            this.hitArea = value;
        }
        else
        {
            this._forceHitArea = null;
            this.hitArea = new Rectangle(0, 0, this.worldWidth, this.worldHeight);
        }
    }

    /**
     * Enable one-finger touch to drag
     *
     * NOTE: if you expect users to use right-click dragging, you should enable `viewport.options.disableOnContextMenu`
     * to avoid the context menu popping up on each right-click drag.
     *
     * @param {IDragOptions} [options]
     * @param {string} [options.direction=all] direction to drag
     * @param {boolean} [options.pressDrag=true] whether click to drag is active
     * @param {boolean} [options.wheel=true] use wheel to scroll in direction (unless wheel plugin is active)
     * @param {number} [options.wheelScroll=1] number of pixels to scroll with each wheel spin
     * @param {boolean} [options.reverse] reverse the direction of the wheel scroll
     * @param {(boolean|string)} [options.clampWheel=false] clamp wheel(to avoid weird bounce with mouse wheel)
     * @param {string} [options.underflow=center] where to place world if too small for screen
     * @param {number} [options.factor=1] factor to multiply drag to increase the speed of movement
     * @param {string} [options.mouseButtons=all] changes which mouse buttons trigger drag, use: 'all', 'left',
     *  'right' 'middle', or some combination, like, 'middle-right'; you may want to set
     *   viewport.options.disableOnContextMenu if you want to use right-click dragging
     * @param {string[]} [options.keyToPress=null] - array containing
     *  {@link key|https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code} codes of keys that can be
     *  pressed for the drag to be triggered, e.g.: ['ShiftLeft', 'ShiftRight'}.
     * @param {boolean} [options.ignoreKeyToPressOnTouch=false] - ignore keyToPress for touch events
     * @param {number} [options.lineHeight=20] - scaling factor for non-DOM_DELTA_PIXEL scrolling events
     * @returns {Viewport} this
     */
     drag(options)
    {
        this.plugins.add('drag', new Drag(this, options));

        return this;
    }

    /**
     * Clamp to world boundaries or other provided boundaries
     * There are three ways to clamp:
     * 1. direction: 'all' = the world is clamped to its world boundaries, ie, you cannot drag any part of offscreen
     *    direction: 'x' | 'y' = only the x or y direction is clamped to its world boundary
     * 2. left, right, top, bottom = true | number = the world is clamped to the world's pixel location for each side;
     *    if any of these are set to true, then the location is set to the boundary
     *    [0, viewport.worldWidth/viewport.worldHeight], eg: to allow the world to be completely dragged offscreen,
     *    set [-viewport.worldWidth, -viewport.worldHeight, viewport.worldWidth * 2, viewport.worldHeight * 2]
     *
     * Underflow determines what happens when the world is smaller than the viewport
     * 1. none = the world is clamped but there is no special behavior
     * 2. center = the world is centered on the viewport
     * 3. combination of top/bottom/center and left/right/center (case insensitive) = the world is stuck to the
     *     appropriate boundaries
     *
     * NOTES:
     *   clamp is disabled if called with no options; use { direction: 'all' } for all edge clamping
     *   screenWidth, screenHeight, worldWidth, and worldHeight needs to be set for this to work properly
     *
     * @param {object} [options]
     * @param {(number|boolean)} [options.left=false] - clamp left; true = 0
     * @param {(number|boolean)} [options.right=false] - clamp right; true = viewport.worldWidth
     * @param {(number|boolean)} [options.top=false] - clamp top; true = 0
     * @param {(number|boolean)} [options.bottom=false] - clamp bottom; true = viewport.worldHeight
     * @param {string} [direction] - (all, x, or y) using clamps of [0, viewport.worldWidth/viewport.worldHeight];
     *  replaces left/right/top/bottom if set
     * @param {string} [underflow=center] - where to place world if too small for screen (e.g., top-right, center,
     *  none, bottomLeft)     * @returns {Viewport} this
     */
     clamp(options)
    {
        this.plugins.add('clamp', new Clamp(this, options));

        return this;
    }

    /**
     * Decelerate after a move
     *
     * NOTE: this fires 'moved' event during deceleration
     *
     * @param {IDecelerateOptions} [options]
     * @param {number} [options.friction=0.95] - percent to decelerate after movement
     * @param {number} [options.bounce=0.8] - percent to decelerate when past boundaries (only applicable when
     *   viewport.bounce() is active)
     * @param {number} [options.minSpeed=0.01] - minimum velocity before stopping/reversing acceleration
     * @return {Viewport} this
     */
     decelerate(options)
    {
        this.plugins.add('decelerate', new Decelerate(this, options));

        return this;
    }

    /**
     * Bounce on borders
     * NOTES:
     *    screenWidth, screenHeight, worldWidth, and worldHeight needs to be set for this to work properly
     *    fires 'moved', 'bounce-x-start', 'bounce-y-start', 'bounce-x-end', and 'bounce-y-end' events
     * @param {object} [options]
     * @param {string} [options.sides=all] - all, horizontal, vertical, or combination of top, bottom, right, left
     *  (e.g., 'top-bottom-right')
     * @param {number} [options.friction=0.5] - friction to apply to decelerate if active
     * @param {number} [options.time=150] - time in ms to finish bounce
     * @param {object} [options.bounceBox] - use this bounceBox instead of (0, 0, viewport.worldWidth, viewport.worldHeight)
     * @param {number} [options.bounceBox.x=0]
     * @param {number} [options.bounceBox.y=0]
     * @param {number} [options.bounceBox.width=viewport.worldWidth]
     * @param {number} [options.bounceBox.height=viewport.worldHeight]
     * @param {string|function} [options.ease=easeInOutSine] - ease function or name
     *  (see http://easings.net/ for supported names)
     * @param {string} [options.underflow=center] - (top/bottom/center and left/right/center, or center)
     *  where to place world if too small for screen
     * @return {Viewport} this
     */
     bounce(options)
    {
        this.plugins.add('bounce', new Bounce(this, options));

        return this;
    }

    /**
     * Enable pinch to zoom and two-finger touch to drag
     *
     * @param {PinchOptions} [options]
     * @param {boolean} [options.noDrag] - disable two-finger dragging
     * @param {number} [options.percent=1] - percent to modify pinch speed
     * @param {number} [options.factor=1] - factor to multiply two-finger drag to increase the speed of movement
     * @param {PIXI.Point} [options.center] - place this point at center during zoom instead of center of two fingers
     * @param {('all'|'x'|'y')} [options.axis=all] - axis to zoom
     * @return {Viewport} this
     */
     pinch(options)
    {
        this.plugins.add('pinch', new Pinch(this, options));

        return this;
    }

    /**
     * Snap to a point
     *
     * @param {number} x
     * @param {number} y
     * @param {ISnapOptions} [options]
     * @param {boolean} [options.topLeft] - snap to the top-left of viewport instead of center
     * @param {number} [options.friction=0.8] - friction/frame to apply if decelerate is active
     * @param {number} [options.time=1000] - time in ms to snap
     * @param {string|function} [options.ease=easeInOutSine] - ease function or name (see http://easings.net/
     *   for supported names)
     * @param {boolean} [options.interrupt=true] - pause snapping with any user input on the viewport
     * @param {boolean} [options.removeOnComplete] - removes this plugin after snapping is complete
     * @param {boolean} [options.removeOnInterrupt] - removes this plugin if interrupted by any user input
     * @param {boolean} [options.forceStart] - starts the snap immediately regardless of whether the viewport is at
     *   the desired location
     * @return {Viewport} this
     */
     snap(x, y, options)
    {
        this.plugins.add('snap', new Snap(this, x, y, options));

        return this;
    }

    /**
     * Follow a target
     *
     * NOTES:
     *    uses the (x, y) as the center to follow; for PIXI.Sprite to work properly, use sprite.anchor.set(0.5)
     *    options.acceleration is not perfect as it doesn't know the velocity of the target. It adds acceleration
     *    to the start of movement and deceleration to the end of movement when the target is stopped.
     *    To cancel the follow, use: `viewport.plugins.remove('follow')`
     *
     * @fires 'moved' event
     *
     * @param {PIXI.DisplayObject} target to follow
     * @param {IFollowOptions} [options]
     * @param {number} [options.speed=0] - to follow in pixels/frame (0=teleport to location)
     * @param {number} [options.acceleration] - set acceleration to accelerate and decelerate at this rate; speed
     *   cannot be 0 to use acceleration
     * @param {number} [options.radius] - radius (in world coordinates) of center circle where movement is allowed
     *   without moving the viewport     * @returns {Viewport} this
     * @returns {Viewport} this
     */
     follow(target, options)
    {
        this.plugins.add('follow', new Follow(this, target, options));

        return this;
    }

    /**
     * Zoom using mouse wheel
     *
     * NOTE: the default event listener for 'wheel' event is document.body. Use `Viewport.options.divWheel` to
     * change this default
     *
     * @param {IWheelOptions} [options]
     * @param {number} [options.percent=0.1] - percent to scroll with each spin
     * @param {number} [options.smooth] - smooth the zooming by providing the number of frames to zoom between wheel spins
     * @param {boolean} [options.interrupt=true] - stop smoothing with any user input on the viewport
     * @param {boolean} [options.reverse] - reverse the direction of the scroll
     * @param {PIXI.Point} [options.center] - place this point at center during zoom instead of current mouse position
     * @param {number} [options.lineHeight=20] - scaling factor for non-DOM_DELTA_PIXEL scrolling events
     * @param {('all'|'x'|'y')} [options.axis=all] - axis to zoom
     * @return {Viewport} this
     */
     wheel(options)
    {
        this.plugins.add('wheel', new Wheel(this, options));

        return this;
    }

    /**
     * Animate the position and/or scale of the viewport
     * To set the zoom level, use: (1) scale, (2) scaleX and scaleY, or (3) width and/or height
     * @param {object} options
     * @param {number} [options.time=1000] - time to animate
     * @param {PIXI.Point} [options.position=viewport.center] - position to move viewport
     * @param {number} [options.width] - desired viewport width in world pixels (use instead of scale;
     *  aspect ratio is maintained if height is not provided)
     * @param {number} [options.height] - desired viewport height in world pixels (use instead of scale;
     *  aspect ratio is maintained if width is not provided)
     * @param {number} [options.scale] - scale to change zoom (scale.x = scale.y)
     * @param {number} [options.scaleX] - independently change zoom in x-direction
     * @param {number} [options.scaleY] - independently change zoom in y-direction
     * @param {(function|string)} [options.ease=linear] - easing function to use
     * @param {function} [options.callbackOnComplete]
     * @param {boolean} [options.removeOnInterrupt] removes this plugin if interrupted by any user input
     * @returns {Viewport} this
     */
     animate(options)
    {
        this.plugins.add('animate', new Animate(this, options));

        return this;
    }

    /**
     * Enable clamping of zoom to constraints
     *
     * The minWidth/Height settings are how small the world can get (as it would appear on the screen)
     * before clamping. The maxWidth/maxHeight is how larger the world can scale (as it would appear on
     * the screen) before clamping.
     *
     * For example, if you have a world size of 1000 x 1000 and a screen size of 100 x 100, if you set
     * minWidth/Height = 100 then the world will not be able to zoom smaller than the screen size (ie,
     * zooming out so it appears smaller than the screen). Similarly, if you set maxWidth/Height = 100
     * the world will not be able to zoom larger than the screen size (ie, zooming in so it appears
     * larger than the screen).
     *
     * @param {object} [options]
     * @param {number} [options.minWidth] - minimum width
     * @param {number} [options.minHeight] - minimum height
     * @param {number} [options.maxWidth] - maximum width
     * @param {number} [options.maxHeight] - maximum height
     * @param {number} [options.minScale] - minimum scale
     * @param {number} [options.maxScale] - minimum scale
     * @return {Viewport} this
     */
     clampZoom(options)
    {
        this.plugins.add('clamp-zoom', new ClampZoom(this, options));

        return this;
    }

    /**
     * Scroll viewport when mouse hovers near one of the edges or radius-distance from center of screen.
     *
     * NOTES: fires 'moved' event; there's a known bug where the mouseEdges does not work properly with "windowed" viewports
     *
     * @param {IMouseEdgesOptions} [options]
     * @param {number} [options.radius] - distance from center of screen in screen pixels
     * @param {number} [options.distance] - distance from all sides in screen pixels
     * @param {number} [options.top] - alternatively, set top distance (leave unset for no top scroll)
     * @param {number} [options.bottom] - alternatively, set bottom distance (leave unset for no top scroll)
     * @param {number} [options.left] - alternatively, set left distance (leave unset for no top scroll)
     * @param {number} [options.right] - alternatively, set right distance (leave unset for no top scroll)
     * @param {number} [options.speed=8] - speed in pixels/frame to scroll viewport
     * @param {boolean} [options.reverse] - reverse direction of scroll
     * @param {boolean} [options.noDecelerate] - don't use decelerate plugin even if it's installed
     * @param {boolean} [options.linear] - if using radius, use linear movement (+/- 1, +/- 1) instead of angled
     *   movement (Math.cos(angle from center), Math.sin(angle from center))
     * @param {boolean} [options.allowButtons] allows plugin to continue working even when there's a mousedown event
     */
     mouseEdges(options)
    {
        this.plugins.add('mouse-edges', new MouseEdges(this, options));

        return this;
    }

    /** Pause viewport (including animation updates such as decelerate) */
    get pause()
    {
        return !!this._pause;
    }
    set pause(value)
    {
        this._pause = value;

        this.lastViewport = null;
        this.moving = false;
        this.zooming = false;

        if (value)
        {
            this.input.pause();
        }
    }

    /**
     * Move the viewport so the bounding box is visible
     *
     * @param x - left
     * @param y - top
     * @param width
     * @param height
     * @param resizeToFit - Resize the viewport so the box fits within the viewport
     */
     ensureVisible(x, y, width, height, resizeToFit)
    {
        if (resizeToFit && (width > this.worldScreenWidth || height > this.worldScreenHeight))
        {
            this.fit(true, width, height);
            this.emit('zoomed', { viewport: this, type: 'ensureVisible' });
        }
        let moved = false;

        if (x < this.left)
        {
            this.left = x;
            moved = true;
        }
        else if (x + width > this.right)
        {
            this.right = x + width;
            moved = true;
        }
        if (y < this.top)
        {
            this.top = y;
            moved = true;
        }
        else if (y + height > this.bottom)
        {
            this.bottom = y + height;
            moved = true;
        }
        if (moved)
        {
            this.emit('moved', { viewport: this, type: 'ensureVisible' });
        }
    }
}

/**
 * Fires after a mouse or touch click
 * @event Viewport#clicked
 * @type {object}
 * @property {PIXI.Point} screen
 * @property {PIXI.Point} world
 * @property {Viewport} viewport
 */

/**
 * Fires when a drag starts
 * @event Viewport#drag-start
 * @type {object}
 * @property {PIXI.Point} screen
 * @property {PIXI.Point} world
 * @property {Viewport} viewport
 */

/**
 * Fires when a drag ends
 * @event Viewport#drag-end
 * @type {object}
 * @property {PIXI.Point} screen
 * @property {PIXI.Point} world
 * @property {Viewport} viewport
 */

/**
 * Fires when a pinch starts
 * @event Viewport#pinch-start
 * @type {Viewport}
 */

/**
 * Fires when a pinch end
 * @event Viewport#pinch-end
 * @type {Viewport}
 */

/**
 * Fires when a snap starts
 * @event Viewport#snap-start
 * @type {Viewport}
 */

/**
 * Fires when a snap ends
 * @event Viewport#snap-end
 * @type {Viewport}
 */

/**
 * Fires when a snap-zoom starts
 * @event Viewport#snap-zoom-start
 * @type {Viewport}
 */

/**
 * Fires when a snap-zoom ends
 * @event Viewport#snap-zoom-end
 * @type {Viewport}
 */

/**
 * Fires when a bounce starts in the x direction
 * @event Viewport#bounce-x-start
 * @type {Viewport}
 */

/**
 * Fires when a bounce ends in the x direction
 * @event Viewport#bounce-x-end
 * @type {Viewport}
 */

/**
 * Fires when a bounce starts in the y direction
 * @event Viewport#bounce-y-start
 * @type {Viewport}
 */

/**
 * Fires when a bounce ends in the y direction
 * @event Viewport#bounce-y-end
 * @type {Viewport}
 */

/**
 * Fires when for a mouse wheel event
 * @event Viewport#wheel
 * @type {object}
 * @property {object} wheel
 * @property {number} wheel.dx
 * @property {number} wheel.dy
 * @property {number} wheel.dz
 * @property {Viewport} viewport
 */

/**
 * Fires when a wheel-scroll occurs
 * @event Viewport#wheel-scroll
 * @type {Viewport}
 */

/**
 * Fires when a mouse-edge starts to scroll
 * @event Viewport#mouse-edge-start
 * @type {Viewport}
 */

/**
 * Fires when the mouse-edge scrolling ends
 * @event Viewport#mouse-edge-end
 * @type {Viewport}
 */

/**
 * Fires when viewport moves through UI interaction, deceleration, ensureVisible, or follow
 * @event Viewport#moved
 * @type {object}
 * @property {Viewport} viewport
 * @property {string} type - (drag, snap, pinch, follow, bounce-x, bounce-y,
 *  clamp-x, clamp-y, decelerate, mouse-edges, wheel, ensureVisible)
 */

/**
 * Fires when viewport moves through UI interaction, deceleration, ensureVisible, or follow
 * @event Viewport#zoomed
 * @type {object}
 * @property {Viewport} viewport
 * @property {string} type (drag-zoom, pinch, wheel, clamp-zoom, ensureVisible)
 */

/**
 * Fires when viewport stops moving
 * @event Viewport#moved-end
 * @type {Viewport}
 */

/**
 * Fires when viewport stops zooming
 * @event Viewport#zoomed-end
 * @type {Viewport}
 */

/**
* Fires at the end of an update frame
* @event Viewport#frame-end
* @type {Viewport}
*/

export { Animate, Bounce, Clamp, ClampZoom, Decelerate, Drag, Follow, InputManager, MouseEdges, Pinch, Plugin, PluginManager, Snap, SnapZoom, Viewport, Wheel };
//# sourceMappingURL=viewport.es.js.map

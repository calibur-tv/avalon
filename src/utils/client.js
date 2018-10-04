import Vue from "vue";
import scrollToY from "~/assets/js/scrollToY";
import Backdrop from "~/assets/js/Backdrop";
import captcha from "~/assets/js/captcha";
import Cookies from "js-cookie";
import { Message, MessageBox } from "element-ui";
import QRCode from "~/assets/js/qrcode";
import Clipboard from "~/assets/js/clipboard";

Vue.use({
  install(Vue, options) {
    Vue.prototype.$cookie = Cookies;

    Vue.prototype.$scrollToY = scrollToY;

    Vue.prototype.$backdrop = new Backdrop();

    Vue.prototype.$toast = Message;

    Vue.prototype.$copy = Clipboard;

    Vue.prototype.$QRCode = (el, text, options = { width: 170, height: 170 }) =>
      new QRCode(el, {
        text,
        width: options.width,
        height: options.height
      });

    Vue.prototype.$captcha = captcha;

    Vue.prototype.$confirm = MessageBox.confirm;

    Vue.prototype.$alert = MessageBox.alert;

    Vue.prototype.$prompt = MessageBox.prompt;

    Vue.prototype.$eventManager = (function() {
      class Manager {
        constructor() {
          this.id = 0;
          this.listeners = {};
        }

        add(ele, evt, handler, capture = false) {
          const events = typeof evt === "string" ? [evt] : evt;
          const result = [];
          events.forEach(e => {
            const id = this.id++;
            ele.addEventListener(e, handler, capture);
            this.listeners[id] = {
              element: ele,
              event: e,
              handler,
              capture
            };
            result.push(id);
          });
          return result;
        }

        del(id) {
          id.forEach(item => {
            if (this.listeners[item]) {
              const h = this.listeners[item];
              h.element.removeEventListener(h.event, h.handler, h.capture);
              Reflect.deleteProperty(this.listeners, item);
            }
          });
        }
      }
      return new Manager();
    })();
  }
});

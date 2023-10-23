import styles from "../styles/SectionTitle.module.css";

export function SectionTitle() {

  // var tmax_optionsGlobal = {
  //   repeat: -1,
  //   repeatDelay: 1,
  //   yoyo: true
  // };
  
  // CSSPlugin.useSVGTransformAttr = true;
  
  // var tl = new TimelineMax(tmax_optionsGlobal),
  //     path = 'svg *',
  //     stagger_val = 0.0125,
  //     duration = 2;
  
  // $.each($(path), function(i, el) {
  //   tl.set($(this), {
  //     x: '+=' + getRandom(-500, 500),
  //     y: '+=' + getRandom(-500, 500),
  //     rotation: '+=' + getRandom(-720, 720),
  //     scale: 0,
  //     opacity: 0
  //   });
  // });
  
  // var stagger_opts_to = {
  //   x: 0,
  //   y: 0,
  //   opacity: 1,
  //   scale: 1,
  //   rotation: 0,
  //   ease: Power4.easeInOut
  // };
  
  // tl.staggerTo(path, duration, stagger_opts_to, stagger_val);
  
  // var $svg = $('svg');
  // $svg.hover(
  //   function() {
  //     tl.timeScale(0.15);
  //   },
  //   function() {
  //     tl.timeScale(1);
  //   });
  
  // function getRandom(min, max) {
  //   return Math.random() * (max - min) + min;
  // }

  return (
    <div className={styles.body}>
      <svg className={styles.svg} x="0px" y="0px" viewBox="0 0 883 105.2" overflow="visible">
        <path d="M0.522727 0.90909H4.72727L14.6136 25.0568H14.9545L24.8409 0.90909H29.0455V30H25.75V7.89773H25.4659L16.375 30H13.1932L4.10227 7.89773H3.81818V30H0.522727V0.90909Z" />

        <path d="M36.1087 30V0.90909H53.6655V4.03409H39.6314V13.8636H52.7564V16.9886H39.6314V26.875H53.8928V30H36.1087Z" />

        <path d="M75.924 8.18182C75.7536 6.74242 75.0623 5.625 73.8501 4.82955C72.638 4.03409 71.1513 3.63636 69.3899 3.63636C68.102 3.63636 66.9751 3.8447 66.0092 4.26136C65.0528 4.67803 64.3047 5.25095 63.7649 5.98011C63.2346 6.70928 62.9695 7.53788 62.9695 8.46591C62.9695 9.24242 63.1541 9.91004 63.5234 10.4688C63.9022 11.018 64.3852 11.4773 64.9723 11.8466C65.5594 12.2064 66.175 12.5047 66.8189 12.7415C67.4628 12.9687 68.0547 13.1534 68.5945 13.2955L71.549 14.0909C72.3066 14.2898 73.1494 14.5644 74.0774 14.9148C75.0149 15.2652 75.9098 15.7434 76.7621 16.3494C77.6238 16.946 78.334 17.7131 78.8928 18.6506C79.4515 19.5881 79.7308 20.7386 79.7308 22.1023C79.7308 23.6742 79.3189 25.0947 78.495 26.3636C77.6806 27.6326 76.4875 28.6411 74.9155 29.3892C73.353 30.1373 71.4543 30.5114 69.2195 30.5114C67.1361 30.5114 65.3321 30.1752 63.8075 29.5028C62.2924 28.8305 61.0992 27.893 60.228 26.6903C59.3662 25.4877 58.8786 24.0909 58.7649 22.5H62.4013C62.496 23.5985 62.8653 24.5076 63.5092 25.2273C64.1626 25.9375 64.9865 26.4678 65.9808 26.8182C66.9846 27.1591 68.0642 27.3295 69.2195 27.3295C70.5642 27.3295 71.7715 27.1117 72.8416 26.6761C73.9117 26.2311 74.7592 25.6155 75.3842 24.8295C76.0092 24.0341 76.3217 23.1061 76.3217 22.0455C76.3217 21.0795 76.0518 20.2936 75.5121 19.6875C74.9723 19.0814 74.2621 18.589 73.3814 18.2102C72.5007 17.8314 71.549 17.5 70.5263 17.2159L66.9467 16.1932C64.674 15.5398 62.8748 14.607 61.549 13.3949C60.2232 12.1828 59.5604 10.5966 59.5604 8.63636C59.5604 7.00757 60.0007 5.58712 60.8814 4.375C61.7715 3.15341 62.9647 2.20644 64.4609 1.53409C65.9666 0.852272 67.6475 0.511363 69.5036 0.511363C71.3786 0.511363 73.0452 0.847537 74.5036 1.51989C75.9619 2.18276 77.1172 3.09185 77.9695 4.24716C78.8312 5.40246 79.2857 6.71401 79.3331 8.18182H75.924Z" />

        <path d="M96.7727 0.90909H100.977L110.864 25.0568H111.205L121.091 0.90909H125.295V30H122V7.89773H121.716L112.625 30H109.443L100.352 7.89773H100.068V30H96.7727V0.90909Z" />

        <path d="M135.881 0.90909V30H132.359V0.90909H135.881ZM158.854 8.18182C158.683 6.74242 157.992 5.625 156.78 4.82955C155.568 4.03409 154.081 3.63636 152.32 3.63636C151.032 3.63636 149.905 3.8447 148.939 4.26136C147.982 4.67803 147.234 5.25095 146.695 5.98011C146.164 6.70928 145.899 7.53788 145.899 8.46591C145.899 9.24242 146.084 9.91004 146.453 10.4688C146.832 11.018 147.315 11.4773 147.902 11.8466C148.489 12.2064 149.105 12.5047 149.749 12.7415C150.393 12.9687 150.984 13.1534 151.524 13.2955L154.479 14.0909C155.236 14.2898 156.079 14.5644 157.007 14.9148C157.945 15.2652 158.839 15.7434 159.692 16.3494C160.554 16.946 161.264 17.7131 161.822 18.6506C162.381 19.5881 162.661 20.7386 162.661 22.1023C162.661 23.6742 162.249 25.0947 161.425 26.3636C160.61 27.6326 159.417 28.6411 157.845 29.3892C156.283 30.1373 154.384 30.5114 152.149 30.5114C150.066 30.5114 148.262 30.1752 146.737 29.5028C145.222 28.8305 144.029 27.893 143.158 26.6903C142.296 25.4877 141.808 24.0909 141.695 22.5H145.331C145.426 23.5985 145.795 24.5076 146.439 25.2273C147.092 25.9375 147.916 26.4678 148.911 26.8182C149.914 27.1591 150.994 27.3295 152.149 27.3295C153.494 27.3295 154.701 27.1117 155.771 26.6761C156.841 26.2311 157.689 25.6155 158.314 24.8295C158.939 24.0341 159.251 23.1061 159.251 22.0455C159.251 21.0795 158.982 20.2936 158.442 19.6875C157.902 19.0814 157.192 18.589 156.311 18.2102C155.43 17.8314 154.479 17.5 153.456 17.2159L149.876 16.1932C147.604 15.5398 145.804 14.607 144.479 13.3949C143.153 12.1828 142.49 10.5966 142.49 8.63636C142.49 7.00757 142.93 5.58712 143.811 4.375C144.701 3.15341 145.894 2.20644 147.391 1.53409C148.896 0.852272 150.577 0.511363 152.433 0.511363C154.308 0.511363 155.975 0.847537 157.433 1.51989C158.892 2.18276 160.047 3.09185 160.899 4.24716C161.761 5.40246 162.215 6.71401 162.263 8.18182H158.854Z" />

        <path d="M184.362 8.18182C184.191 6.74242 183.5 5.625 182.288 4.82955C181.076 4.03409 179.589 3.63636 177.827 3.63636C176.54 3.63636 175.413 3.8447 174.447 4.26136C173.49 4.67803 172.742 5.25095 172.202 5.98011C171.672 6.70928 171.407 7.53788 171.407 8.46591C171.407 9.24242 171.592 9.91004 171.961 10.4688C172.34 11.018 172.823 11.4773 173.41 11.8466C173.997 12.2064 174.612 12.5047 175.256 12.7415C175.9 12.9687 176.492 13.1534 177.032 13.2955L179.987 14.0909C180.744 14.2898 181.587 14.5644 182.515 14.9148C183.452 15.2652 184.347 15.7434 185.2 16.3494C186.061 16.946 186.772 17.7131 187.33 18.6506C187.889 19.5881 188.168 20.7386 188.168 22.1023C188.168 23.6742 187.756 25.0947 186.933 26.3636C186.118 27.6326 184.925 28.6411 183.353 29.3892C181.79 30.1373 179.892 30.5114 177.657 30.5114C175.574 30.5114 173.77 30.1752 172.245 29.5028C170.73 28.8305 169.537 27.893 168.665 26.6903C167.804 25.4877 167.316 24.0909 167.202 22.5H170.839C170.933 23.5985 171.303 24.5076 171.947 25.2273C172.6 25.9375 173.424 26.4678 174.418 26.8182C175.422 27.1591 176.502 27.3295 177.657 27.3295C179.002 27.3295 180.209 27.1117 181.279 26.6761C182.349 26.2311 183.197 25.6155 183.822 24.8295C184.447 24.0341 184.759 23.1061 184.759 22.0455C184.759 21.0795 184.489 20.2936 183.95 19.6875C183.41 19.0814 182.7 18.589 181.819 18.2102C180.938 17.8314 179.987 17.5 178.964 17.2159L175.384 16.1932C173.112 15.5398 171.312 14.607 169.987 13.3949C168.661 12.1828 167.998 10.5966 167.998 8.63636C167.998 7.00757 168.438 5.58712 169.319 4.375C170.209 3.15341 171.402 2.20644 172.898 1.53409C174.404 0.852272 176.085 0.511363 177.941 0.511363C179.816 0.511363 181.483 0.847537 182.941 1.51989C184.399 2.18276 185.555 3.09185 186.407 4.24716C187.269 5.40246 187.723 6.71401 187.771 8.18182H184.362Z" />

        <path d="M197.483 0.90909V30H193.96V0.90909H197.483Z" />

        <path d="M229.092 15.4545C229.092 18.5227 228.538 21.1742 227.43 23.4091C226.322 25.6439 224.802 27.3674 222.87 28.5795C220.938 29.7917 218.732 30.3977 216.251 30.3977C213.77 30.3977 211.563 29.7917 209.631 28.5795C207.7 27.3674 206.18 25.6439 205.072 23.4091C203.964 21.1742 203.41 18.5227 203.41 15.4545C203.41 12.3864 203.964 9.73485 205.072 7.5C206.18 5.26515 207.7 3.54167 209.631 2.32955C211.563 1.11742 213.77 0.511363 216.251 0.511363C218.732 0.511363 220.938 1.11742 222.87 2.32955C224.802 3.54167 226.322 5.26515 227.43 7.5C228.538 9.73485 229.092 12.3864 229.092 15.4545Z M225.683 15.4545C225.683 12.9356 225.261 10.8097 224.418 9.0767C223.585 7.34375 222.453 6.0322 221.023 5.14205C219.603 4.25189 218.012 3.80682 216.251 3.80682C214.489 3.80682 212.894 4.25189 211.464 5.14205C210.043 6.0322 208.912 7.34375 208.069 9.0767C207.236 10.8097 206.819 12.9356 206.819 15.4545C206.819 17.9735 207.236 20.0994 208.069 21.8324C208.912 23.5653 210.043 24.8769 211.464 25.767C212.894 26.6572 214.489 27.1023 216.251 27.1023C218.012 27.1023 219.603 26.6572 221.023 25.767C222.453 24.8769 223.585 23.5653 224.418 21.8324C225.261 20.0994 225.683 17.9735 225.683 15.4545Z" />

        <path d="M258.083 0.90909V30H254.674L238.822 7.15909H238.538V30H235.015V0.90909H238.424L254.333 23.8068H254.617V0.90909H258.083Z" />

        <path
          d="M281.041 8.18182C280.871 6.74242 280.179 5.625 278.967 4.82955C277.755 4.03409 276.268 3.63636 274.507 3.63636C273.219 3.63636 272.092 3.8447 271.126 4.26136C270.17 4.67803 269.422 5.25095 268.882 5.98011C268.352 6.70928 268.087 7.53788 268.087 8.46591C268.087 9.24242 268.271 9.91004 268.641 10.4688C269.019 11.018 269.502 11.4773 270.089 11.8466C270.677 12.2064 271.292 12.5047 271.936 12.7415C272.58 12.9687 273.172 13.1534 273.712 13.2955L276.666 14.0909C277.424 14.2898 278.267 14.5644 279.195 14.9148C280.132 15.2652 281.027 15.7434 281.879 16.3494C282.741 16.946 283.451 17.7131 284.01 18.6506C284.569 19.5881 284.848 20.7386 284.848 22.1023C284.848 23.6742 284.436 25.0947 283.612 26.3636C282.798 27.6326 281.605 28.6411 280.033 29.3892C278.47 30.1373 276.571 30.5114 274.337 30.5114C272.253 30.5114 270.449 30.1752 268.925 29.5028C267.41 28.8305 266.216 27.893 265.345 26.6903C264.483 25.4877 263.996 24.0909 263.882 22.5H267.518C267.613 23.5985 267.982 24.5076 268.626 25.2273C269.28 25.9375 270.104 26.4678 271.098 26.8182C272.102 27.1591 273.181 27.3295 274.337 27.3295C275.681 27.3295 276.889 27.1117 277.959 26.6761C279.029 26.2311 279.876 25.6155 280.501 24.8295C281.126 24.0341 281.439 23.1061 281.439 22.0455C281.439 21.0795 281.169 20.2936 280.629 19.6875C280.089 19.0814 279.379 18.589 278.499 18.2102C277.618 17.8314 276.666 17.5 275.643 17.2159L272.064 16.1932C269.791 15.5398 267.992 14.607 266.666 13.3949C265.34 12.1828 264.678 10.5966 264.678 8.63636C264.678 7.00757 265.118 5.58712 265.999 4.375C266.889 3.15341 268.082 2.20644 269.578 1.53409C271.084 0.852272 272.765 0.511363 274.621 0.511363C276.496 0.511363 278.162 0.847537 279.621 1.51989C281.079 2.18276 282.234 3.09185 283.087 4.24716C283.948 5.40246 284.403 6.71401 284.45 8.18182H281.041Z"
          fill="black"
        />
      </svg>
    </div>
  );
}
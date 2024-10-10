module.exports = {
  //you can add other file types in the content, for example if you us typescript, you can ts, or jsx, or txs
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'red': '#EF1607',
      'white': '#ffffff',
      'black': '#000000'
    },
    extend: {
      width: {
        '774': '774px',
        '442': '442px',
        '446': '446px',
        '553': '553px',
        '479': '479px'
      },
      height: {
        '479': '479px'
      },
      letterSpacing: {
        '0.84': '0.84px',
        '-1.28': '-1.28px'
      },
      lineHeight: {
        '19.52': '19.52px',
        '21': '21px'
      },
      backgroundImage: {
        'bg-custom-2': "url('./images/rectangle-15.jpg')",
      }
    },
  },
  plugins: [],
}

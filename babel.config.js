module.exports={
  presets:[
    [
      "@babel/preset-env",
      {
        targets:{
          browsers: ["last 2 versions"]
        },
        useBuiltIns:"core-js@2e"
      }
    ]
  ]
}
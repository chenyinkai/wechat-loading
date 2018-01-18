/**
 * Copyright (c) 2017 chenyinkai
 * License: MIT
 * https://github.com/chenyinkai/wechat-loading
**/

/**
 * Removes leading and trailing whitespace or specified characters from `string`
 *
 * @param  {String} str The string to trim
 * @return {String}     Returns the trimmed string
 */
let trim = str => {
  return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
}

let showLoadingObj = {
  _is_load: false,
  createLoading (tip) {
    if (!this._is_load) {
      let loaderBox = document.createElement('div')
      loaderBox.id = 'loading'
      let boxStyleArr = []
      boxStyleArr.push('position:fixed')
      boxStyleArr.push('top: 50%')
      boxStyleArr.push('left:50%')
      boxStyleArr.push('zIndex:9999999999')
      boxStyleArr.push('height:100px')
      boxStyleArr.push('width:100px')
      boxStyleArr.push('backgroundColor:rgba(0, 0, 0, 0.7)')
      boxStyleArr.push('borderRadius:10px')
      boxStyleArr.push('marginTop:-50px')
      boxStyleArr.push('marginLeft:-50px')
      for (let i = 0, l = boxStyleArr.length; i < l; i++) {
        let key = trim(boxStyleArr[i].split(':')[0])
        let value = trim(boxStyleArr[i].split(':')[1])
        loaderBox.style[key] = value
      }

      let loaderTxt = document.createElement('span')
      let loadingTip = tip || '数据加载中'
      loaderTxt.innerHTML = loadingTip
      let txtStyleArr = []
      txtStyleArr.push('position:absolute')
      txtStyleArr.push('bottom: 10%')
      txtStyleArr.push('text-align: center')
      txtStyleArr.push('fontSize:16px')
      txtStyleArr.push('color:#fff')
      txtStyleArr.push('width: 100%')
      txtStyleArr.push('overflow: hidden')
      txtStyleArr.push('height: 20px')
      for (let i = 0, l = txtStyleArr.length; i < l; i++) {
        let key = trim(txtStyleArr[i].split(':')[0])
        let value = trim(txtStyleArr[i].split(':')[1])
        loaderTxt.style[key] = value
      }

      let loader = document.createElement('div')
      let loaderStyleArr = []
      loaderStyleArr.push('position:relative')
      loaderStyleArr.push('top: 30%')
      loaderStyleArr.push('left:50%')
      for (let i = 0, l = loaderStyleArr.length; i < l; i++) {
        let key = trim(loaderStyleArr[i].split(':')[0])
        let value = trim(loaderStyleArr[i].split(':')[1])
        loader.style[key] = value
      }

      let divArr = []
      for (let i = 0; i < 8; i++) {
        let div = document.createElement('div')
        divArr.push(div)
      }
      let divStyleArr = []
      divStyleArr.push('position:absolute')
      divStyleArr.push('height:15px')
      divStyleArr.push('width:5px')
      divStyleArr.push('backgroundColor:#fff')
      divStyleArr.push('borderRadius:2px')
      divStyleArr.push('margin:0 auto')
      divStyleArr.push('top: 50%')
      divStyleArr.push('left:50%')
      for (let i = 0; i < divArr.length; i++) {
        for (let k = 0; k < divStyleArr.length; k++) {
          let key = trim(divStyleArr[k].split(':')[0])
          let value = trim(divStyleArr[k].split(':')[1])
          divArr[i].style[key] = value
        }
        this.addStyle(divArr[7], -20, 0, 0, -0.4)
        this.addStyle(divArr[6], -13, 13, 45, -0.35)
        this.addStyle(divArr[5], 0, 20, 90, -0.3)
        this.addStyle(divArr[4], 13, 13, -45, -0.25)
        this.addStyle(divArr[3], 20, 0, 0, -0.2)
        this.addStyle(divArr[2], 13, -13, 45, -0.15)
        this.addStyle(divArr[1], 0, -20, 90, -0.1)
        this.addStyle(divArr[0], -13, -13, -45, 0)
        loader.appendChild(divArr[i])
      }

      let style = document.createElement('style')
      style.id = 'loading-style'
      style.innerHTML = `@-webkit-keyframes loading { 0% { opacity: 0.3; } 80% { opacity: 1; } 100% { opacity: 1; } }`
      document.getElementsByTagName('head')[0].appendChild(style)

      loaderBox.appendChild(loaderTxt)
      loaderBox.appendChild(loader)
      if (document.compatMode === 'BackCompat') {
        document.body.appendChild(loaderBox)
      } else {
        document.documentElement.appendChild(loaderBox)
      }
      this._is_load = true
    } else {
      document.getElementById('loading').style.display = 'block'
    }
  },
  closeLoading () {
    if (document.getElementById('loading')) {
      document.getElementById('loading').style.display = 'none'
    }
  },
  addStyle (obj, top, left, rotate, time) {
    obj.style.top = top + 'px'
    obj.style.left = left + 'px'
    obj.style['transform'] = 'rotate(' + rotate + 'deg)'
    obj.style['-ms-transform'] = 'rotate(' + rotate + 'deg)'
    obj.style['-moz-transform'] = 'rotate(' + rotate + 'deg)'
    obj.style['-webkit-transform'] = 'rotate(' + rotate + 'deg)'
    obj.style['-o-transform'] = 'rotate(' + rotate + 'deg)'
    obj.style['animation'] = 'loading 0.5s ' + time + 's infinite ease-in-out'
    obj.style['-webkit-animation'] = 'loading 0.5s ' + time + 's infinite ease-in-out'
  }
}

const wechatLoading = {
  show (tip) {
    showLoadingObj.createLoading(tip)
  },
  hide () {
    showLoadingObj.closeLoading()
  }
}
module.exports = wechatLoading

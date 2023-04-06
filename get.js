const crypto=require('crypto')
const o = 'ydsecret://query/key/B*RGygVywfNBwpmBaZg*WT7SIOUP2T0C9WHMZN39j^DAdaZhAnxvGcCY6VYFwnHl';
const n = 'ydsecret://query/iv/C@lZe2YzHtZ2CYgaXKSVfsb7Y4QWHjITPPZ0nQp87fBeJ!Iv6v^6fvi2WN@bYpJ4';
function datas(t){
        const a = Buffer.alloc(16, crypto.createHash('md5').update(o).digest())
      , r = Buffer.alloc(16, crypto.createHash('md5').update(n).digest())
      , i = crypto.createDecipheriv("aes-128-cbc", a, r);
    let s = i.update(t, "base64", "utf-8");
    return s += i.final("utf-8"),
    s
}

text='Z21kD9ZK1ke6ugku2ccWu-MeDWh3z252xRTQv-wZ6jddVo3tJLe7gIXz4PyxGl73nSfLAADyElSjjvrYdCvEP4pfohVVEX1DxoI0yhm36ytQNvu-WLU94qULZQ72aml6lA1mDFvd6tzivCVYqmNuvmjjOBQsAO9SoXhvGUZSdM4X8iUapWbO7gyyqOepC_zRICk0rr1xShwBtb-NPubAaSHVM7B2m5fM142lsCvLIMQzqoJMN796Aw4bXgF0V5egpAG6uJAwsIP0cGDgiu3grbRe982P3dCaU-VFePsbELc1cHjsrUc0HuQqlJ5CmDYwdH99tVwSzos9YMrRZ30TFzzUenRwfm7Uk2AExW1ecG1qR95n8rIerwkSD6dbwZYahFXXB9aBN0HJ7B_rc2dTTyqo_Q0kdsogT_Nn6ZFkfur4FP7jLRM8wluhBkEqH0cQczGCqU0Ux6XTB_3x07SqDl5H1JCZPDfr1NEPPDnjzY3MqVc3FriyfMpOmPelYvhAPCAU2QuoC-ilLHm_XM7qgYzNhYAmrsDjV-fu2ZI9xTl3AN54pP1tDjkmIwAy1cAABbFqUZcBxKTHv4d9I6_2Cek8gMdvxbtSlKN5mhUTzD_IN3ZpCqbvK7apkU6uZxTGaIVzAVosuCFmCXcWnCO9YXQgT2S1blzd6a6cZxUQ1VIIT8u78ino82S-jaDThDwZmTthk66kHnzc7eQB0TUXuDtAuP87hzPeKTn511GQ401Gb3u-MqERRC8AMQVkpsdqwBCx3tUe5ibKMTMNBtziVqaNOeKhlLwnviemaEb5wUD1QMUJsxAeio7piFb8gTwUp46w5e_VmdmrHOZEbyWeFTxJ97faUqJVrlFLRLvbXq8TVTz5D1JjaAFH-hbXI4ztUpfN-TFq4q083UWn7uQIRHobq8LAFus7-nuNjX_E3xruH83rgWKdpBSe5c1KbuJVgzOzbaicAvjSV84zgPAVmntyKh1aQwaTdb41ZHkttNmi5PJyflSdRx3ivDmhLLXnSsNBp-hre6CjYko_G8AEa4ErpSDJVhu-2GltDyle5_LRrP0t-Pt8XCXzND6vAtiAWjhIR0pJWnXlZeRbfAYHYmKQ3VSITbvIthg-66HEEnjbKC5oumJD9gBKoFUV73Eam8uaE7cxcspId2q3VPxSLODiOGdHSCQpAOoIX-QXoiJvziUHupu1e4JujtayWTYAYgn-vddn7pVHyMdSPHYz3Q==\n'
console.log(datas(text))
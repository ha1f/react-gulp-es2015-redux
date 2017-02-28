import React from 'react';

export default class BalloonBox extends React.Component {
    constructor(props) {
        super(props);
        this.x = 0;
        this.y = 0;
        this.spdx = 5;
        this.spdy = 3;
    }
    fitCanvas() {
      // canvasのサイズ合わせ
      if ((this._canvas) && (this._canvasWrapper)) {
        this._canvas.width = this._canvasWrapper.clientWidth;
        this._canvas.height = this._canvasWrapper.clientHeight;
      }
    }
    nextFrame() {
      const ctx = this._canvas.getContext('2d');
      ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);

      this.x += this.spdx;
      this.y += this.spdy;

      // 要素を描画する
      ctx.beginPath();
      ctx.strokeRect(this.x, this.y, 50, 50);

      if ((this.x > this._canvas.width - 50) || (this.x < 0)) {
          this.spdx = -this.spdx;
      }
      if ((this.y > this._canvas.height - 50) || (this.y < 0)) {
          this.spdy = -this.spdy;
      }
      requestAnimationFrame(this.nextFrame.bind(this));
    }
    componentDidMount() {
      this.fitCanvas();
      requestAnimationFrame(this.nextFrame.bind(this));
    }
    render() {
        return (
          <div className="balloon-box" ref={ (c) => { this._canvasWrapper = c; }}>
            <canvas ref={ (c) => { this._canvas = c; }}>
            </canvas>
          </div>
        );
    }
}

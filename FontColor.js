function set-text-color(color) {
    @if(lightness($color) > 50) {
        @return #000;
    } @else {
        @return #fff;
    }
}
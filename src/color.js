export function color(value){
    switch(value){
        case 2: return '#f7dfb1';
        case 4: return '#eac7a1';
        case 8: return '#d2b188';
        case 16: return '#d09b69';
        case 32: return '#b7865d';
        case 64: return '#ad7954';
        case 128: return '#a37045';
        case 256: return '#88563b';
        case 512: return '#7d4f38';
        case 1024: return '#6b4731';
        case 2048: return '#543928';
        case 4096: return '#402d26';
        case 8192: return 'green';
        default: return 'white';
    }
}
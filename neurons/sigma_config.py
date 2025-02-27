
min_sigma = 0.002 * 2
max_sigma = 0.004 * 2

m = [
    "5GbBAFs8BxtAVJPPxBFDtdYibbWCLAFdeUGhv37HyMNLjNCN",
    "5H6gwCEggZzaPmZz5f4WuXU5cnYUQQFi7S5XZWZGjcti5MQF",
    "5EgzUAahkZEJrKKCoVfTunPwmiv7kCbYdotdbSdYQVNRKATf",
    "5GZQ6bGxK6CxJQKyjPGPEAKjEKwxoyw3ZzVeVTkSZTEGa6Hc",
    "5Fs5munXrM1hM1XT78hBWTkKNNsoFhRcBZR1CbdGPpYvgUtR",
    "5GBs43b2f7ZX2gw8VRUF2vKhqeyHUHU7mRLvpEDyfLxuQoRE",
    "5Ham66bsakHKpVXG7xX93nSj5TPpJEyA3HugNmzjjGRQ133h",
    "5Gq5vdzLQ7UULueXMoNDVRjSabpuJn2p66ZaGFpyVRZARiVQ",
    "5EhwjEusumPEKGMPH3b71N7cw9AyQeoRu1jX2wxVmZ86gsvE",
    "5FPFcp77QVjuirCMn7yLWAwZCM9RR1teJzPL33zBJKJAA87t",
    "5HGnHP67gFBdANQs8dgpL7VB8vNxyHe61yevut7n41boZ79F",
    "5G6aqJWJRxiH7TAME3qMCEeqJBtxXxybeXEx1xUDuahmbMLb",
    "5HVj6Qut5bZyNCazEWH2JHrJYctgpycehVg7BjHAwqNWmqj1",
    "5DiGta8eDqWACcREcsU52BNStK9xHRqiUoZxN6fsh5ic18uz",
    "5DXFpsipv7zNcQX8bL3G26bSR8scadCP76ibMdA9Sf1zzrmw",
    "5ECpZpcTucatHeCxrtApmy5av2qhqiu51hVWwv2ZNGpptB8o",
    "5GKurC5bKFzPgPYnNKALxBYi14xRDo4pu4gxenVM8KGjh5m5",
    "5GsLX9GAsEDuAr2M2fP85UbwNBA868kkRAawBxdUg94GsSUu",
    "5E4BYyLdDwniRu7DMsweWfeVqnBFhadGwRfRbYe6R8ipdSNw",
    "5GKEpgTLYojAy8vY89Row4t56Nmxt2Kgs3tviDRWi8VTppMB",
    "5FZEvXbUXWG186jggzCLu1LsVMG3QH91znwjHmpr13fCFXY7",
    "5EF2yRXoTXA3uuFc2YoHJ8HtMZKQRWWSZK9dUZnSLx28vkRh",
    "5GYXyMM2StUJxwVDmc2Tj2b5pGQ5B11T1f4RRgh4AoHdq3Va",
    "5CvoaRfe2KCmwJdWHvkPVDozbpiwnuuoUAPJEZf1fxessRNq",
    "5ELnryU8gyhiKejxtdnsPCiroAphYm7j27QUT9PPRjbvm31a"
]

def get_miner_sigma(key):
    if key in m:
        return min_sigma + m.index(key) * (max_sigma - min_sigma) / len(m)
    return (max_sigma + min_sigma) / 2

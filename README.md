This tool will clone [Kanjivg](https://github.com/KanjiVG/kanjivg) (check their license below) svg files and create formatted versions, just use `npm run start`.

## About the format

The original format can cause some trouble when processing svg files with tools like [sharp](https://github.com/lovell/sharp) or [svgo](https://github.com/svg/svgo).

The proposed format replaces `kvg:*` attributes with [`data-*` attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).

~~For further optimization you can install and use [svgo](https://github.com/svg/svgo). Just run `svgo ./kanjivg/formatted` to overwrite the output files.~~
⚠️ Default svgo optimization will join some strokes into a single path making animations less acurate, so I wouldn't recommend it.

## Commands

- `start`: This will run both `clone-kvg` and `format` commands.
- `clone-kvg`: This will clone the [kanjivg](https://github.com/KanjiVG/kanjivg) repository and preserve only the `/kanji` folder.
- `format`: This will run the `formatter.mjs` script to create a modified copy of every file in `/kanji` and output it to the `/formatted` folder.

# KanjiVG license

[KanjiVG](https://github.com/KanjiVG/kanjivg) is copyright Ulrich Apel and released under the Creative Commons
Attribution-Share Alike 3.0 license:

http://creativecommons.org/licenses/by-sa/3.0/

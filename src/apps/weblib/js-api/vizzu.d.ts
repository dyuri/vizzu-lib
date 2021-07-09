type SeriesName = string;

interface DataSeries {
	name: SeriesName;
	type: 'categories'|'values';
	values: string[]|number[];
}

interface Record {
	[key: SeriesName]: string|number;
}

interface DataSet {
	series: DataSeries[];
	filter: (record: any) => boolean;
}

interface Channel {
	title: string|null;
	attach: SeriesName[];
	detach: SeriesName[];
	range: `${number},${number},${number}`;
	labelLevel: number;
}

interface Descriptor {
	channels: {
		x: Channel;
		y: Channel;
		color: Channel;
		lightness: Channel;
		size: Channel;
		shape: Channel;
		label: Channel;
	};
	title: string|null;
	legend: 'color'|'lightness'|'size'|null;
	coordSystem: 'cartesian'|'polar';
	rotation: number;
	geometry: 'rectangle'|'circle'|'area'|'line';
	orientation: 'horizontal'|'vertical';
	sort: 'none'|'experimental';
	reverse: boolean;
	align: 'none'|'min'|'center'|'max'|'stretch';
	split: boolean;
}

type Length = `${number}px`|`${number}%`|number;

type Color = `#${number}`
	|`rgb(${number},${number},${number})`
	|`rgba(${number},${number},${number},${number})`;

interface Padding {
	paddingTop: Length;
	paddingRight: Length;
	paddingBottom: Length;
	paddingLeft: Length;
}

interface Font {
	fontFamily: string;
	fontStyle: 'normal'|'italic'|'oblique';
	fontWeight: 'normal'|'bold'|number;
	fontSize: Length;
}

interface Box {
	backgroundColor: Color;
	borderColor: Color;
	borderWidth: number;
}

interface Text {
	color: Color;
	textAlign: 'center'|'left'|'right';
	backgroundColor: Color;
	overflow: 'visible'|'hidden';
	numberFormat: 'none'|'groupped'|'prefixed';
}

type ColorTransform = `color(${Color})`
	| `lightness(${number})`
	| `grayscale(${number})`;

interface MarkerLabel extends Label {
	position: 'below'|'center'|'above';
	filter: ColorTransform;
	format: 'valueFirst'|'categoriesFirst';
}

interface Marker {
	borderWidth: number;
	borderOpacity: number;
	borderOpacityMode: 'straight'|'premultiplied';
	fillOpacity: number;
	guides: {
		color: Color;
		lineWidth: number;
	};
	label: MarkerLabel;
}

interface Axis {
	color: Color;
	title: Label;
	label: Label;
	ticks: {
		color: Color;
		lineWidth: number;
		length: Length;
		position: 'outside'|'inside'|'center';
	};
	guides: {
		color: Color;
		lineWidth: number;
	};
	interlaceing: {
		color: Color;
	};
}

interface Plot extends Padding, Box {
	marker: Marker;
	axis: Axis;
}

interface Legend extends Padding, Box {
	width: Length;
	title: Label;
	label: Label;
	marker: {
		type: 'circle'|'square';
		size: Length;
	};
}

type ColorGradient = string;
type ColorPalette = string;

interface Data {
	colorGradient: ColorGradient;
	colorPalette: ColorPalette;
	minLightness: number;
	maxLightness: number;
	lineWidth: number;
	lineMinWidth: number;
	lineMaxWidth: number;
	circleMinRadius: number;
	circleMaxRadius: number;
	barMaxPadding: number;
	barPaddingDecrease: number;
	columnMaxPadding: number;
	columnPaddingDecrease: number;
}

type Label = Padding & Font & Text;

interface Styles extends Padding, Box, Font {
	plot: Plot;
	legend: Legend;
	title: Label;
	data: Data;
}

interface AnimationTarget {
	data: DataSet;
	descriptor: Descriptor;
	style: Styles;
}

interface AnimControl {
    seek(value: `${number}%`|`${number}s`|`${number}ms`): void;
    pause(): void;
    play(): void;
    stop(): void;
    reverse(): void;
}

type EventName = string;

export default class Vizzu {
    constructor(container: string|HTMLElement);
    initializing: Promise<Vizzu>;
    on(eventName: EventName, handler: (event: any) => void): void;
    off(eventName: EventName, handler: (event: any) => void): void;
    animate(obj: AnimationTarget): Promise<Vizzu>;
    get animation(): AnimControl;
    version(): string;
}
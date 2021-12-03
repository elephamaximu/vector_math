import Head from 'next/head';
import './app.css';
import {
	Mafs,
	Text,
	useMovablePoint,
	CartesianCoordinates,
	Theme,
	Vector,
	Polygon,
} from 'mafs';
import * as vec from 'vec-la';
import clamp from 'lodash.clamp';

export default function Home() {
	const pointOnCircle = useMovablePoint([1, 1]);

	const gridMotion = useMovablePoint([0, 0], {
		constrain: ([x, y]) => [clamp(Math.round(x)), clamp(Math.round(y))],
	});

	const velocity = useMovablePoint([3, 3], {
		constrain: ([x, y]) => [clamp(Math.round(x)), clamp(Math.round(y))],
	});

	const tip = useMovablePoint([6, 4], {
		constrain: ([x, y]) => [clamp(Math.round(x)), clamp(Math.round(y))],
	});
	const tip2 = useMovablePoint([0, 0], {
		constrain: ([x, y]) => [clamp(Math.round(x)), clamp(Math.round(y))],
	});
	const tip3 = useMovablePoint([1, 1], {
		constrain: ([x, y]) => [clamp(Math.round(x)), clamp(Math.round(y))],
	});

	const tip4 = useMovablePoint([0, 0], {
		constrain: ([x, y]) => [clamp(Math.round(x)), clamp(Math.round(y))],
	});

	const vec1 = tip.point;
	const vec2 = tip2.point;
	const vec3 = tip3.point;
	const vec4 = tip4.point;

	return (
		<div className='container'>
			<Head>
				<title>Vector math</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<h1 className='title'>게임 개발을 위한 수학</h1>
				<h3 className='title'>
					<a
						href='https://ko.khanacademy.org/math/linear-algebra/vectors-and-spaces'
						rel='noopener noreferrer'
						target='_blank'
					>
						벡터 강의 1 : khanacademy 보기
					</a>
				</h3>
				<h3 className='title'>
					<a
						href='https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab'
						rel='noopener noreferrer'
						target='_blank'
					>
						벡터 강의 2 : 3Blue1Brown 보기
					</a>
				</h3>
				<div className='grid'>
					<p className='description'>
						좌표평면에서 <code>(x좌표, y좌표)</code>
					</p>

					<Mafs className='Mafs' yAxisExtent={[-2.0, 2.0]}>
						<CartesianCoordinates subdivisions={5} />
						<Text
							x={pointOnCircle.x}
							y={pointOnCircle.y}
							attach='e'
							attachDistance={25}
						>
							({pointOnCircle.x.toFixed(1)}, {pointOnCircle.y.toFixed(1)})
						</Text>
						{pointOnCircle.element}
					</Mafs>

					<p className='description'>
						기준 1을 작게, 정수만 선택되기 <code>(x좌표, y좌표)</code>
					</p>

					<Mafs
						className='Mafs'
						xAxisExtent={[-12.0, 12.0]}
						yAxisExtent={[-4.7, 4.7]}
					>
						<CartesianCoordinates subdivisions={2} />
						<Text
							x={gridMotion.x}
							y={gridMotion.y}
							attach='e'
							attachDistance={25}
						>
							({gridMotion.x.toFixed(0)}, {gridMotion.y.toFixed(0)})
						</Text>
						{gridMotion.element}
					</Mafs>

					<p className='description'>
						벡터란? <code></code>
					</p>

					<Mafs
						className='Mafs'
						xAxisExtent={[-12.0, 12.0]}
						yAxisExtent={[-4.7, 4.7]}
					>
						<CartesianCoordinates subdivisions={2} />
						<Polygon
							color={Theme.indigo}
							fillOpacity={0.7}
							points={[
								[-1000, 0],
								[1000, 0],
								[1000, -1000],
								[-1000, -1000],
							]}
						/>
						<Vector tip={velocity.point} style='dashed' />
						<Text x={velocity.x} y={velocity.y} attach='e' attachDistance={25}>
							({velocity.x.toFixed(0)}, {velocity.y.toFixed(0)})
						</Text>
						{velocity.element}
					</Mafs>

					<p className='description'>
						벡터의 합 <code></code>
					</p>

					<Mafs
						className='Mafs'
						xAxisExtent={[-12.0, 12.0]}
						yAxisExtent={[-4.7, 4.7]}
					>
						<CartesianCoordinates />
						<Vector tail={vec4} tip={vec1} />
						<Vector tail={vec2} tip={vec3} />
						<Text
							x={tip.x}
							y={tip.y}
							attach='e'
							attachDistance={25}
							color='orange'
						>
							({tip.x.toFixed(0)}, {tip.y.toFixed(0)})
						</Text>
						<Text
							x={tip2.x}
							y={tip2.y}
							attach='s'
							attachDistance={25}
							color='#eaeaea'
						>
							({tip2.x.toFixed(0)}, {tip2.y.toFixed(0)})
						</Text>
						<Text
							x={tip4.x}
							y={tip4.y}
							attach='s'
							attachDistance={25}
							color='#eaeaea'
						>
							({tip4.x.toFixed(0)}, {tip4.y.toFixed(0)})
						</Text>
						<Text
							x={tip3.x}
							y={tip3.y}
							attach='w'
							attachDistance={25}
							color='lime'
						>
							({tip3.x.toFixed(0) - tip2.x.toFixed(0)},{' '}
							{tip3.y.toFixed(0) - tip2.y.toFixed(0)})
						</Text>
						<Text
							x={tip.x}
							y={tip.y}
							attach='s'
							attachDistance={25}
							color='lime'
						>
							({tip.x.toFixed(0) - tip4.x.toFixed(0)},{' '}
							{tip.y.toFixed(0) - tip4.y.toFixed(0)})
						</Text>
						<Text
							x={tip3.x}
							y={tip3.y}
							attach='n'
							attachDistance={25}
							color='orange'
						>
							({tip3.x.toFixed(0)}, {tip3.y.toFixed(0)})
						</Text>

						{tip.element}
						{tip2.element}
						{tip3.element}
						{tip4.element}
					</Mafs>
				</div>
			</main>

			<footer>
				<a>
					Powered by <img src='/vercel.svg' alt='Vercel' className='logo' />
				</a>
			</footer>

			<style jsx>{`
				.container {
					min-height: 100vh;
					padding: 0 0.5rem;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}

				main {
					padding: 5rem 0;
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}

				footer {
					width: 100%;
					height: 100px;
					border-top: 1px solid #eaeaea;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				footer img {
					margin-left: 0.5rem;
				}

				footer a {
					display: flex;
					justify-content: center;
					align-items: center;
				}

				a {
					color: inherit;
					text-decoration: none;
				}

				.title a {
					color: #0070f3;
					text-decoration: none;
					font-size: 1.4rem;
				}

				.title a:hover,
				.title a:focus,
				.title a:active {
					text-decoration: underline;
				}

				.title {
					margin: 0;
					line-height: 0.9;
					font-size: 2.7rem;
				}

				.title,
				.description {
					text-align: center;
				}

				.description {
					line-height: 1.5;
					font-size: 1.5rem;
				}

				code {
					background: #fafafa;
					border-radius: 5px;
					padding: 0.75rem;
					font-size: 1.1rem;
					font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
						DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
				}

				.grid {
					display: flex;
					align-items: center;
					justify-content: center;
					flex-wrap: wrap;
					max-width: 1330px;
					margin-top: 0.5rem;
				}

				.logo {
					height: 1em;
				}

				@media (max-width: 600px) {
					.grid {
						width: 100%;
						flex-direction: column;
					}
				}
			`}</style>

			<style jsx global>{`
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
						Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
						sans-serif;
				}

				* {
					box-sizing: border-box;
				}
			`}</style>
		</div>
	);
}

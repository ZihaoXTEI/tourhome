import styled from 'styled-components'

export const DetailImageWrapper = styled.div`
	position: relative;

	> .image-container {
		display: flex;
		height: 600px;
		background-color: #000;

		&:hover {
			.cover {
				opacity: 1 !important;
			}

			.item:hover {
				.cover {
					opacity: 0 !important;
				}
			}
		}
	}

	.left,
	.right {
		width: 50%;
		height: 100%;

		.item {
			position: relative;
			height: 100%;
			overflow: hidden;
			cursor: pointer;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				transition: transform 300ms ease-in;
			}

			.cover {
				position: absolute;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
				background-color: rgba(0, 0, 0, 0.3);
				opacity: 0;
				transition: opacity 200ms ease;
			}

			&:hover {
				img {
					transform: scale(1.08);
				}
			}
		}
	}

	.right {
		display: flex;
		flex-wrap: wrap;

		.item {
			box-sizing: border-box;
			width: 50%;
			height: 50%;
			border: 1px solid #000;
		}
	}

	.show-btn {
		position: absolute;
		right: 15px;
		bottom: 15px;
		line-height: 22px;
		padding: 6px 15px;
		border-radius: 4px;
		background-color: #fff;
		z-index: 99;
		cursor: pointer;
	}
`

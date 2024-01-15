import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { createClient } from "@/prismicio";

export default async function Page() {
	const client = createClient();
	const page = await client.getSingle("home", {graphQuery: `{
	home {
		slices {
			... on feature_block {
				variation {
					... on default {
						primary {
							...primaryFields
							theme {
								... on theme {
									background_color
									text_color
								}
							}
							frame {
								... on map_frame {
									...map_frameFields
								}
								... on slideshow_frame {
									...slideshow_frameFields
								}
								... on stop_motion_frame {
									...stop_motion_frameFields
								}
								... on still_frame {
									...still_frameFields
								}
							}
						}
						items {
							...itemsFields
							button_theme {
								... on theme {
									...themeFields
								}
							}
						}
					}
					... on event {
						primary {
							...primaryFields
							theme {
								... on theme {
									background_color
									text_color
								}
							}
							event {
								... on event {
									...eventFields
								}
							}
						}
					}
				}
			}
		}
	}
}`, 
		// fetchLinks: "theme.background_color,theme.text_color,map_frame.embed_link,slideshow_frame.images,stop_motion_frame.video,stop_motion_frame.frames_per_second,still_frame.image,event.title,event.image,event.body,event.date,button.theme,button.link,button.title"
	});

	return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata() {
	const client = createClient();
	const page = await client.getSingle("home");

	return {
		title: page.data.meta_title,
		description: page.data.meta_description,
	};
}

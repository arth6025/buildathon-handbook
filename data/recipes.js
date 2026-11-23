/* Engine recipes for the Orbit Buildathon.
   Every recipe is Claude connected to Sloosh through the Sloosh MCP, chaining
   three or more Sloosh tools, with BytePlus models running on the team's own
   key (BYOK). Each track-tagged card in cards.js points to one recipe through
   its "recipe" id. Tools named here are from the Sloosh release notes
   (#release-notes, Nov 2026). "confirm" marks a piece not in the notes yet. */
window.RECIPES = [
  { id:"winner-batch", track:"01", name:"Winner → batch",
    chain:["Claude reads your top 3 ads and names what worked","Kling Image 4.0 statics, one hook each, with exact on-image text","Seedance 2.5 Flash cuts of the best two","Into a Sloosh Project, marked Approved"],
    proves:"Thumb-stops in the Feed Test" },
  { id:"reviews-ugc", track:"01", name:"Reviews → UGC",
    chain:["Claude pulls customer lines from your review export","Synora: your AI Influencer says them on camera, lip-synced","Audio Studio adds music","Seedance cuts for Reels and Shorts"],
    proves:"Thumb-stops in the Feed Test" },
  { id:"bharat", track:"01", name:"Bharat engine",
    chain:["Claude transcreates a winning ad per language","Kling Image 4.0 statics with the new language on the image","Synora version in each language's voice","Native-speaker check before Approved"],
    proves:"Thumb-stops, plus the regional power-up" },
  { id:"full-funnel", track:"02", name:"Full-funnel engine",
    chain:["Ad variants per audience (Kling Image 4.0 or Seedream 5.5)","Landing-page workflow per audience (confirm)","Email HTML workflow per audience (confirm)","Claude checks one promise runs ad → page → email"],
    proves:"Buy taps and head-to-head wins" },
  { id:"marketplace", track:"02", name:"Marketplace engine",
    chain:["Seedream 5.5 packshot on a transparent background","Multi-angle and in-use shots from references","Kling Image 4.0 infographics with sharp spec text","Side by side with the rival's listing"],
    proves:"Head-to-head wins against your top rival" },
  { id:"winback", track:"02", name:"Win-back engine",
    chain:["Claude segments your customer export","A visual per segment (Kling Image 4.0)","Email HTML workflow per segment (confirm)","Offer lines checked for false claims"],
    proves:"Head-to-head wins on the email, buy taps on the ad" },
  { id:"shoot", track:"03", name:"Shoot without a shoot",
    chain:["Seedream 5.5 cut-out from one packshot","Your AI Influencer as the model, in use and on body","Kling Image 4.0 hero at 4K or 8K","A Project folder per store, sized and Approved"],
    proves:"Approved assets from a cold run" },
  { id:"launch", track:"03", name:"Launch in a box",
    chain:["Claude plans the drop and runs Sloosh Spaces through the MCP","Posters and posts (Kling Image 4.0)","Calypso remixes a trending reel into your launch reel","Audio Studio music, everything in one Project"],
    proves:"Approved assets from a cold run" },
  { id:"brand-guard", track:"03", name:"Brand guard loop",
    chain:["Your logo, pack and face saved as @elements","Every generation uses the elements","Claude checks colour, type and claims against the brand kit","Approve or reject in the Project, fix only what's off"],
    proves:"Approved assets from a cold run" }
];

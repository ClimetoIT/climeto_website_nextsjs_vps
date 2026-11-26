import VisitSession from "./models/VisitSession";

const MAX_PAGES = 100;

export async function recordVisitSession({
  sessionId,
  ip,
  path,
  durationMs = 0,
  pageView = false,
}) {
  const now = new Date();

  const applyUpdate = async () => {
    // Step 1: Ensure session document exists atomically
    await VisitSession.updateOne(
      { sessionId },
      {
        $setOnInsert: {
          sessionId,
          ip,
          pages: [],
          pageCount: 0,
          totalDurationMs: 0,
          firstSeenAt: now,
          lastSeenAt: now,
        },
      },
      { upsert: true }
    );

    // Step 2: Update existing page entry if present
    const incFields = {
      totalDurationMs: durationMs,
      "pages.$.durationMs": durationMs,
    };
    if (pageView) {
      incFields.pageCount = 1;
      incFields["pages.$.views"] = 1;
    }

    const updatedExisting = await VisitSession.updateOne(
      { sessionId, "pages.path": path },
      {
        $set: { ip, lastSeenAt: now },
        $inc: incFields,
      }
    );

    if (updatedExisting.matchedCount > 0) {
      return { ok: true };
    }

    // Step 3: Push new page entry (respecting MAX_PAGES cap)
    const pushInc = { totalDurationMs: durationMs };
    if (pageView) pushInc.pageCount = 1;

    await VisitSession.updateOne(
      {
        sessionId,
        "pages.path": { $ne: path },
        [`pages.${MAX_PAGES - 1}`]: { $exists: false },
      },
      {
        $set: { ip, lastSeenAt: now },
        $inc: pushInc,
        $push: {
          pages: {
            path,
            views: pageView ? 1 : 0,
            durationMs,
          },
        },
      }
    );

    return { ok: true };
  };

  try {
    return await applyUpdate();
  } catch (error) {
    if (error?.code === 11000) {
      return await applyUpdate();
    }
    throw error;
  }
}

